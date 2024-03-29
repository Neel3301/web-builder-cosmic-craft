"use client";

import { use_Image_Store } from "@/store/Image_Store";
import use_Model_Store from "@/store/studio/Model_Store";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Interface
interface Image_Props {
  cid: string;
  img: string;
  classname?: string;
  env?: "production" | "development";

  height: number;
  width: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  object?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

// Component
const My_Image = ({
  cid,
  img,
  classname,
  env = "development",
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  object,
}: Image_Props) => {
  //  Image Store
  const [
    addImageComponent,
    ImageComponents,
    setSelectedId,
    setImg,
    setDisplayImg,
  ] = use_Image_Store((s) => [
    s.addImageComponent,
    s.ImageComponents,
    s.setSelectedId,
    s.setImg,
    s.setDisplayImg,
  ]);

  // Adding Component
  const [initialized, setInitialized] = useState(false);
  const existingComponent = ImageComponents.find(
    (myComponent) => myComponent.id === cid,
  );
  if (!existingComponent) {
    if (!initialized) {
      addImageComponent({
        id: cid,
        img: img,
        imgUrl: "",
        displayImg: img,
        height: height === undefined ? 100 : height,
        width: width === undefined ? 100 : width,
        maxHeight: maxHeight!,
        maxWidth: maxWidth!,
        minHeight: minHeight!,
        minWidth: minWidth!,
        object: object!,
      });
      setInitialized(true);
    }
  }

  // Model Store
  const studioImageToolBoxOnOpen = use_Model_Store(
    (s) => s.studioImageToolBoxOnOpen,
  );

  // Finding Component
  const component = ImageComponents.find(
    (myComponent) => myComponent.id === cid,
  );

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
          res.data.websiteData.image === undefined
            ? []
            : res.data.websiteData.image,
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

  // Handle Click
  const handleClick = () => {
    setSelectedId(cid);
    studioImageToolBoxOnOpen();
    setDisplayImg(cid, component!.img);
  };

  // Return
  return (
    <>
      {env === "development" ? (
        <div
          style={{
            height: `${component?.height}px`,
            width: `${component?.width}px`,
            minHeight: `${component?.minHeight}px`,
            minWidth: `${component?.minWidth}px`,
            maxHeight: `${component?.maxHeight}px`,
            maxWidth: `${component?.maxWidth}px`,
          }}
          className="resize"
          onClick={handleClick}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={component?.img}
            alt={img}
            id={cid}
            className={`${classname} h-full w-full`}
            style={{
              objectFit: `${component?.object!}`,
            }}
          />
        </div>
      ) : (
        <div
          style={{
            height: `${Style?.height}px`,
            width: `${Style?.width}px`,
            minHeight: `${Style?.minHeight}px`,
            minWidth: `${Style?.minWidth}px`,
            maxHeight: `${Style?.maxHeight}px`,
            maxWidth: `${Style?.maxWidth}px`,
          }}
          className="relative resize"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={Style?.imgUrl}
            alt={img}
            id={cid}
            fill
            className={`${classname}  h-full w-full`}
            style={{
              objectFit: Style?.object!,
            }}
          />
        </div>
      )}
    </>
  );
};

export default My_Image;
