"use client";

import { useEffect, useState } from "react";
import { poppins } from "@/assets/Fonts";
import { usePathname } from "next/navigation";
import { use_Btn_Store } from "@/store/Btn_Store";
import use_Model_Store from "@/store/studio/Model_Store";
import axios from "axios";

// Interface
interface Btn_Props {
  cid: string;
  content: string;
  classname?: string;
  env?: "production" | "development";

  fontSize?: number;
  textUnderline?: boolean;
  textItalic?: boolean;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
  paddingX?: Number;
  paddingY?: Number;
  bgColor?: string;
  textColor?: string;
  fontStyle?: string;
  border?: number;
  borderColor?: string;
  borderRadius?: number;
}

// Component
const Btn = ({
  cid,
  content,
  classname,
  env = "development",
  fontSize,
  textUnderline,
  textItalic,
  fontWeight,
  lineHeight,
  letterSpacing,
  paddingX,
  paddingY,
  bgColor,
  textColor,
  fontStyle,
  border,
  borderColor,
  borderRadius,
}: Btn_Props) => {
  //  Btn Store
  const [addBtnComponent, BtnComponents, setSelectedId, setContent] =
    use_Btn_Store((s) => [
      s.addBtnComponent,
      s.BtnComponents,
      s.setSelectedId,
      s.setContent,
    ]);

  // Model Store
  const studioBtnToolBoxOnOpen = use_Model_Store(
    (s) => s.studioBtnToolBoxOnOpen,
  );

  // Adding Component
  const existingComponent = BtnComponents.find(
    (myComponent) => myComponent.id === cid,
  );
  const [initialized, setInitialized] = useState(false);
  if (!existingComponent) {
    if (!initialized) {
      addBtnComponent({
        id: cid,
        content: cid,
        fontStyle: fontStyle === undefined ? `${poppins.className}` : fontStyle,
        fontSize: fontSize === undefined ? 18 : fontSize,
        textColor: textColor === undefined ? `#000000` : textColor,
        textUnderline: textUnderline === undefined ? false : textUnderline,
        textItalic: textItalic === undefined ? false : textItalic,
        fontWeight: fontWeight === undefined ? 400 : fontWeight,
        lineHeight: lineHeight === undefined ? 0 : lineHeight,
        letterSpacing: letterSpacing === undefined ? 0 : letterSpacing,
        paddingX: paddingX === undefined ? 24 : paddingX,
        paddingY: paddingY === undefined ? 12 : paddingY,
        bgColor: bgColor === undefined ? `#f1f1f1` : bgColor,
        border: border === undefined ? 0 : border,
        borderColor: borderColor === undefined ? `transparent` : borderColor,
        borderRadius: borderRadius === undefined ? 0 : borderRadius,
      });
      setContent(cid, content);
      setInitialized(true);
    }
  }

  // Finding Component
  const component = BtnComponents.find((myComponent) => myComponent.id === cid);

  // Handle Click
  const handleClick = () => {
    setSelectedId(cid);
    studioBtnToolBoxOnOpen();
  };

  // Handle Input Change
  const [localContent, setLocalContent] = useState(content);
  const handleInput = (e: any) => {
    setLocalContent(e.currentTarget.textContent || "");
    setContent(cid, e.currentTarget.textContent);
    console.log(localContent);
  };

  // Setting Environment
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // Tag
  const Element = env == "development" ? "div" : "button";

  // fetching website data
  const [websiteData, setWebsiteData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/web/fetch_web", {
          website_id: path.split("/")[2],
        });
        setWebsiteData(
          res.data.websiteData.btn === undefined
            ? []
            : res.data.websiteData.btn,
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

  return (
    <>
      {env === "development" ? (
        <div className={`${classname} h-fit w-fit`}>
          <Element
            id={cid}
            onClick={handleClick}
            onBlur={handleInput}
            contentEditable={env == "development" ? true : false}
            suppressContentEditableWarning={true}
            spellCheck={false}
            className={`${component?.fontStyle} h-fit w-fit`}
            style={{
              fontSize: `${component?.fontSize}px`,
              color: `${component?.textColor}`,
              textDecoration: `${component?.textUnderline == true ? `underline` : `none`}`,
              fontStyle: `${component?.textItalic == true ? `italic` : `normal`}`,
              fontWeight: `${component?.fontWeight}`,
              lineHeight: `${component?.lineHeight === 0 ? `normal` : component?.lineHeight}px`,
              letterSpacing: `${component?.letterSpacing}px`,
              padding: `${component?.paddingY}px ${component?.paddingX}px`,
              backgroundColor: `${component?.bgColor}`,
              border: `${component?.border}px solid ${component?.borderColor}`,
              borderRadius: `${component?.borderRadius}px`,
            }}
          >
            {localContent}
          </Element>
        </div>
      ) : (
        <div className={`${classname} h-fit w-fit`}>
          <Element
            id={cid}
            onClick={handleClick}
            onBlur={handleInput}
            contentEditable={false}
            suppressContentEditableWarning={true}
            spellCheck={false}
            className={`${Style?.fontStyle} h-fit w-fit`}
            style={{
              fontSize: `${Style?.fontSize}px`,
              color: `${Style?.textColor}`,
              textDecoration: `${Style?.textUnderline == true ? `underline` : `none`}`,
              fontStyle: `${Style?.textItalic == true ? `italic` : `normal`}`,
              fontWeight: `${Style?.fontWeight}`,
              lineHeight: `${Style?.lineHeight === 0 ? `normal` : Style?.lineHeight}px`,
              letterSpacing: `${Style?.letterSpacing}px`,
              padding: `${Style?.paddingY}px ${Style?.paddingX}px`,
              backgroundColor: `${Style?.bgColor}`,
              border: `${Style?.border}px solid ${Style?.borderColor}`,
              borderRadius: `${Style?.borderRadius}px`,
            }}
          >
            {Style?.content}
          </Element>
        </div>
      )}
    </>
  );
};

export default Btn;
