"use client";
import { titillium_Web } from "@/assets/Fonts";
import { CrossIcon } from "@/assets/Svgs";
import { uploadOnCloudinary } from "@/helper/Cloudinary_Config";
import { use_Image_Store } from "@/store/Image_Store";
import use_Model_Store from "@/store/studio/Model_Store";
import { useState } from "react";
import { CldUploadButton } from "next-cloudinary";

const Image_Toolbox_Studio = () => {
  const [studioImageToolBoxIsOpen, studioImageToolBoxOnClose, isNavbarVisible] =
    use_Model_Store((s) => [
      s.studioImageToolBoxIsOpen,
      s.studioImageToolBoxOnClose,
      s.isNavbarVisible,
    ]);

  const [
    setHeight,
    setWidth,
    setMaxHeight,
    setMaxWidth,
    setMinHeight,
    setMinWidth,
    setImg,
    ImageComponents,
    addImageComponent,
    selectedId,
    setObject,
    setDisplayImg,
  ] = use_Image_Store((s) => [
    s.setHeight,
    s.setWidth,
    s.setMaxHeight,
    s.setMaxWidth,
    s.setMinHeight,
    s.setMinWidth,
    s.setImg,
    s.ImageComponents,
    s.addImageComponent,
    s.selectedId,
    s.setObject,
    s.setDisplayImg,
  ]);
  const component = ImageComponents.find(
    (myComponent) => myComponent.id === selectedId,
  );

  const handleHeight = (e: any) => {
    setHeight(selectedId!, e.target.value);
  };
  const handleWidth = (e: any) => {
    setWidth(selectedId!, e.target.value);
  };
  const handleMaxHeight = (e: any) => {
    setMaxHeight(selectedId!, e.target.value);
  };
  const handleMaxWidth = (e: any) => {
    setMaxWidth(selectedId!, e.target.value);
  };
  const handleMinHeight = (e: any) => {
    setMinHeight(selectedId!, e.target.value);
  };
  const handleMinWidth = (e: any) => {
    setMinWidth(selectedId!, e.target.value);
  };

  const handleObject = (
    value: "fill" | "contain" | "cover" | "none" | "scale-down",
  ) => {
    console.log("value = " + value);
    setObject(selectedId!, value);
    console.log(value);
  };

  const [selectedImage, setSelectedImage] = useState("");
  const handleImageChange = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files?.[0];

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {
        if (reader.result && typeof reader.result === "string") {
          const result = reader.result as string;
          setSelectedImage(result);
          setDisplayImg(selectedId!, result);
          setImg(selectedId!, result);
          // setImg(selectedId!, event.target.files?.[0]);
        }
      };
    }
  };

  return (
    <>
      {studioImageToolBoxIsOpen && (
        <div>
          <div
            className={`min-w-[320px] border-r-2 border-t-[5px] bg-white ${titillium_Web.className} border-[#f2f2f2]  border-t-[#00b6ff] p-[12px]`}
            style={{
              height: ` ${isNavbarVisible == true ? `calc(100vh - 120px)` : `100vh`} `,
            }}
          >
            {/* text editor and cross  */}
            <div
              className={`flex w-full items-center justify-between border-b-2 border-[#f2f2f2]  pb-[4px]`}
            >
              <h2 className={`text-[24px] font-bold text-[#424242]`}>
                Image Editor
              </h2>
              <div onClick={studioImageToolBoxOnClose}>
                <CrossIcon classname={`h-[24px] w-[24px] cursor-pointer`} />
              </div>
            </div>

            <div
              style={{ height: `calc(100% - 41.6px)` }}
              className="custom-scrollbar w-full overflow-y-scroll"
            >
              {/* select image  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image
                  </h2>
                </div>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="file-input file-input-bordered file-input-info h-[42px] w-full max-w-xs"
                />
                {selectedImage ? (
                  <div className="max-h-[300px] w-[300px] pt-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={component?.displayImg}
                      alt="Selected"
                      className="h-full max-h-[300px] w-full"
                    />
                  </div>
                ) : (
                  <div className="max-h-[300px] w-[300px] pt-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={component?.img}
                      alt="Selected"
                      className="h-full max-h-[300px] w-full"
                    />
                  </div>
                )}
              </div>

              {/* Height  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Height
                  </h2>
                  <input
                    type="number"
                    value={component?.height}
                    onInput={handleHeight}
                    className={`input-decoration flex w-[56px]  items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div></div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.height}
                    onChange={handleHeight}
                    className="range range-info range-xs"
                  />
                </div>
              </div>

              {/* Width  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Width
                  </h2>
                  <input
                    type="number"
                    value={component?.width}
                    onInput={handleWidth}
                    className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.width}
                    onChange={handleWidth}
                    className="range range-info range-xs"
                  />
                </div>
              </div>

              {/* Object Property  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Object Property
                  </h2>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-[24px] `}
                >
                  <div
                    onClick={() => handleObject("fill")}
                    className={`cursor-pointer rounded-[8px] border-2 border-[#f2f2f2] px-[12px] py-[4px] ${component?.object == `fill` ? `bg-[#00b6ff] text-white` : `bg-[#e8e9ea] hover:bg-[#c1edff] `}`}
                  >
                    Fill
                  </div>
                  <div
                    onClick={() => handleObject("contain")}
                    className={`cursor-pointer rounded-[8px] border-2 border-[#f2f2f2] px-[12px] py-[4px] ${component?.object == `contain` ? `bg-[#00b6ff] text-white` : `bg-[#e8e9ea] hover:bg-[#c1edff] `}`}
                  >
                    Contain
                  </div>
                  <div
                    onClick={() => handleObject("cover")}
                    className={`cursor-pointer rounded-[8px] border-2 border-[#f2f2f2] px-[12px] py-[4px] ${component?.object == `cover` ? `bg-[#00b6ff] text-white` : `bg-[#e8e9ea] hover:bg-[#c1edff] `}`}
                  >
                    Cover
                  </div>
                  {/* <div
                    onClick={() => handleObject("none")}
                    className={`cursor-pointer rounded-[8px] border-2 border-[#f2f2f2] px-[12px] py-[4px] ${component?.object == `none` ? `bg-[#00b6ff] text-white` : `bg-[#e8e9ea] hover:bg-[#c1edff] `}`}
                  >
                    None
                  </div> */}
                </div>
              </div>

              {/* Max Height  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Max-Height
                  </h2>
                  <input
                    type="number"
                    value={component?.maxHeight}
                    onInput={handleMaxHeight}
                    className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.maxHeight}
                    onChange={handleMaxHeight}
                    className="range range-info range-xs"
                  />
                </div>
              </div>

              {/* MAx Width  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Max-Width
                  </h2>
                  <input
                    type="number"
                    value={component?.maxWidth}
                    onInput={handleMaxWidth}
                    className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.maxWidth}
                    onChange={handleMaxWidth}
                    className="range range-info range-xs"
                  />
                </div>
              </div>

              {/* Min Height  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Min-Height
                  </h2>
                  <input
                    type="number"
                    value={component?.minHeight}
                    onInput={handleMinHeight}
                    className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.minHeight}
                    onChange={handleMinHeight}
                    className="range range-info range-xs"
                  />
                </div>
              </div>

              {/* Min Width  */}
              <div
                className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
              >
                <div className={`flex items-center justify-between`}>
                  <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                    Select Image Min-Width
                  </h2>
                  <input
                    type="number"
                    value={component?.minWidth}
                    onInput={handleMinWidth}
                    className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                  />
                </div>
                <div
                  className={`flex w-full items-center justify-center gap-[24px] `}
                >
                  <input
                    type="range"
                    min={0}
                    max="1000"
                    value={component?.minWidth}
                    onChange={handleMinWidth}
                    className="range range-info range-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Image_Toolbox_Studio;
