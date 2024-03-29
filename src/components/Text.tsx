"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { poppins } from "@/assets/Fonts";
import { usePathname } from "next/navigation";
import axios from "axios";
import { use_Text_Store } from "@/store/Text_Store";
import use_Model_Store from "@/store/studio/Model_Store";

// Interface
interface Text_Props {
  cid: string;
  content: string;
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  classname?: string;
  href?: string;
  env?: "production" | "development";

  fontStyle?: string;
  fontSize?: number;
  textColor?: string;
  textAlignment?: string;
  textUnderline?: boolean;
  textItalic?: boolean;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
}

// Component
const Text = ({
  cid,
  content,
  tag,
  classname,
  href,
  env = "development",
  fontStyle,
  fontSize,
  textColor,
  textAlignment,
  textUnderline,
  textItalic,
  fontWeight,
  lineHeight,
  letterSpacing,
}: Text_Props) => {
  //  Text Store
  const [addTextComponent, TextComponents, setSelectedId, setContent] =
    use_Text_Store((s) => [
      s.addTextComponent,
      s.TextComponents,
      s.setSelectedId,
      s.setContent,
    ]);

  // Model Store
  const studioToolBoxOnOpen = use_Model_Store((s) => s.studioToolBoxOnOpen);

  // Edding Component
  const existingComponent = TextComponents.find(
    (myComponent) => myComponent.id === cid,
  );
  const [initialized, setInitialized] = useState(false);
  if (!existingComponent) {
    if (!initialized) {
      addTextComponent({
        id: cid,
        content: cid,
        fontStyle: fontStyle === undefined ? `${poppins.className}` : fontStyle,
        fontSize: fontSize === undefined ? 18 : fontSize,
        textColor: textColor === undefined ? `#000000` : textColor,
        textAlignment: textAlignment === undefined ? `left` : textAlignment,
        textUnderline: textUnderline === undefined ? false : textUnderline,
        textItalic: textItalic === undefined ? false : textItalic,
        fontWeight: fontWeight === undefined ? 400 : fontWeight,
        lineHeight: lineHeight === undefined ? 0 : lineHeight,
        letterSpacing: letterSpacing === undefined ? 0 : letterSpacing,
      });
      setContent(cid, content);
      setInitialized(true);
    }
  }

  // Finding Component
  const component = TextComponents.find(
    (myComponent) => myComponent.id === cid,
  );

  // Handle On Click
  const handleClick = async () => {
    setSelectedId(cid);
    studioToolBoxOnOpen();
  };

  // Handling Text Input Change
  const [localContent, setLocalContent] = useState(content);
  const handleInput = (e: any) => {
    setLocalContent(e.currentTarget.textContent || "");
    setContent(cid, e.currentTarget.textContent);
  };

  // Setting Environment
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // fetching website data
  const [websiteData, setWebsiteData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/web/fetch_web", {
          website_id: path.split("/")[2],
        });
        setWebsiteData(
          res.data.websiteData.text === undefined
            ? []
            : res.data.websiteData.text,
        );
      } catch (error) {
        console.error("Error fetching website data: ", error);
      }
    };
    fetchData();
  }, [path]);

  // Finding Right Website Data
  const Style = websiteData?.find(
    (ElementId: { id: string }) => ElementId.id === cid,
  );

  // Setting Tag
  const Element = tag == Link ? (env == "development" ? "span" : Link) : tag;

  // Return
  return (
    <>
      {env === "development" ? (
        <div className={`${classname}`}>
          <Element
            id={cid}
            onClick={handleClick}
            onBlur={handleInput}
            contentEditable={true}
            suppressContentWarning={true}
            spellCheck={false}
            className={`${component?.fontStyle} h-fit w-fit`}
            href={`${href}`}
            style={{
              fontSize: `${component?.fontSize}px`,
              color: `${component?.textColor}`,
              textAlign: `${component?.textAlignment}`,
              textDecoration: `${component?.textUnderline == true ? `underline` : `none`}`,
              fontStyle: `${component?.textItalic == true ? `italic` : `normal`}`,
              fontWeight: `${component?.fontWeight}`,
              lineHeight: `${component?.lineHeight === 0 ? `normal` : component?.lineHeight}px`,
              letterSpacing: `${component?.letterSpacing}px`,
            }}
          >
            {localContent}
          </Element>
        </div>
      ) : (
        <div className={`${classname}`}>
          <Element
            id={cid}
            contentEditable={false}
            className={`${component?.fontStyle} h-fit w-fit`}
            href={`${href}`}
            style={{
              fontSize: `${Style?.fontSize}px`,
              color: `${Style?.textColor}`,
              textAlign: `${Style?.textAlignment}`,
              textDecoration: `${Style?.textUnderline == true ? `underline` : `none`}`,
              fontStyle: `${Style?.textItalic == true ? `italic` : `normal`}`,
              fontWeight: `${Style?.fontWeight}`,
              lineHeight: `${Style?.lineHeight === 0 ? `normal` : Style?.lineHeight}px`,
              letterSpacing: `${Style?.letterSpacing}px`,
            }}
          >
            {Style?.content}
          </Element>
        </div>
      )}
    </>
  );
};

export default Text;
