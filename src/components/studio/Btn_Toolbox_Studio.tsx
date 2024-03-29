"use client";

// shadcn ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// fonts
import {
  montserrat,
  poppins,
  roboto_Mono,
  salsa,
  titillium_Web,
  volkhov,
} from "@/assets/Fonts";

// icons
import {
  CrossIcon,
  LetterSpacingIcon,
  LineHeightIcon,
  TextItalicIcon,
  TextUnderlineIcon,
} from "@/assets/Svgs";
import { use_Btn_Store } from "@/store/Btn_Store";
import use_Model_Store from "@/store/studio/Model_Store";

// store

const Btn_Toolbox_Studio = () => {
  const [
    selectedId,
    BtnComponents,
    setFontSize,
    setFontStyle,
    setTextColor,
    setTextUnderline,
    setTextItalic,
    setFontWeight,
    setLineHeight,
    setLetterSpacing,
    setPaddingX,
    setPaddingY,
    setBorder,
    setBorderColor,
    setBgColor,
    setBorderRadius,
  ] = use_Btn_Store((s) => [
    s.selectedId,
    s.BtnComponents,
    s.setFontSize,
    s.setFontStyle,
    s.setTextColor,
    s.setTextUnderline,
    s.setTextItalic,
    s.setFontWeight,
    s.setLineHeight,
    s.setLetterSpacing,
    s.setPaddingX,
    s.setPaddingY,
    s.setBorder,
    s.setBorderColor,
    s.setBgColor,
    s.setBorderRadius,
  ]);

  const component = BtnComponents.find(
    (myComponent) => myComponent.id === selectedId,
  );

  const handleFontStyle = (value: any) => {
    setFontStyle(selectedId!, value);
  };
  const handleFontSize = (e: any) => {
    setFontSize(selectedId!, e.target.value);
  };
  const handleTextColor = (e: any) => {
    setTextColor(selectedId!, e.target.value);
  };

  const handleBgColor = (e: any) => {
    setBgColor(selectedId!, e.target.value);
  };

  const handleBorderColor = (e: any) => {
    setBorderColor(selectedId!, e.target.value);
  };
  const handleTextUnderline = () => {
    setTextUnderline(selectedId!, !component?.textUnderline);
  };
  const handleTextItalic = () => {
    setTextItalic(selectedId!, !component?.textItalic);
  };
  const handleFontWeight = (e: any) => {
    setFontWeight(selectedId!, e.target.value);
  };

  const handleBorderRadius = (e: any) => {
    setBorderRadius(selectedId!, e.target.value);
  };

  const handlePaddingX = (e: any) => {
    setPaddingX(selectedId!, e.target.value);
  };
  const handlePaddingY = (e: any) => {
    setPaddingY(selectedId!, e.target.value);
  };

  const handleBorder = (e: any) => {
    setBorder(selectedId!, e.target.value);
  };

  const handleLineHeight = (e: any) => {
    setLineHeight(selectedId!, e.target.value);
  };
  const handleLetterSpacing = (e: any) => {
    setLetterSpacing(selectedId!, e.target.value);
  };

  const [studioBtnToolBoxIsOpen, studioBtnToolBoxOnClose, isNavbarVisible] =
    use_Model_Store((s) => [
      s.studioBtnToolBoxIsOpen,
      s.studioBtnToolBoxOnClose,
      s.isNavbarVisible,
    ]);

  return (
    <>
      {studioBtnToolBoxIsOpen && (
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
              Button Editor
            </h2>
            <div onClick={studioBtnToolBoxOnClose}>
              <CrossIcon classname={`h-[24px] w-[24px] cursor-pointer`} />
            </div>
          </div>
          <div
            style={{ height: `calc(100% - 41.6px)` }}
            className="custom-scrollbar w-full overflow-y-scroll"
          >
            {/* fonts  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-[#f2f2f2]  p-[12px]`}
            >
              <div>
                <h2
                  className={`${titillium_Web.className} text-[16px] font-semibold text-[#494949]`}
                >
                  Select Font Style
                </h2>
              </div>
              <div>
                <Select
                  onValueChange={handleFontStyle}
                  value={component?.fontStyle}
                >
                  <SelectTrigger className="w-full  rounded-[4px] border border-[#00b6ff] hover:bg-blue-50">
                    <SelectValue placeholder="Select Fonts" />
                  </SelectTrigger>
                  <SelectContent className={`bg-white`}>
                    <SelectItem
                      value={`${titillium_Web.className}`}
                      className={`${titillium_Web.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Titillium Web
                    </SelectItem>
                    <SelectItem
                      value={`${montserrat.className}`}
                      className={`${montserrat.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Montserrat
                    </SelectItem>
                    <SelectItem
                      value={`${volkhov.className}`}
                      className={`${volkhov.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Volkhov
                    </SelectItem>
                    <SelectItem
                      value={`${poppins.className}`}
                      className={`${poppins.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Poppins
                    </SelectItem>
                    <SelectItem
                      value={`${roboto_Mono.className}`}
                      className={`${roboto_Mono.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Roboto Mono
                    </SelectItem>
                    <SelectItem
                      value={`${salsa.className}`}
                      className={`${salsa.className} cursor-pointer text-[14px] font-normal`}
                    >
                      Salsa
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* color picker  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Text Color
                </h2>
                <input
                  type="text"
                  value={component?.textColor}
                  onChange={handleTextColor}
                  className={`flex w-[120px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="h-fit w-full overflow-hidden">
                <input
                  type="color"
                  value={component?.textColor}
                  onInput={handleTextColor}
                  className="inset-0 h-[28px] w-full border-none bg-transparent outline-none"
                />
              </div>
            </div>
            {/* size  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Font Size
                </h2>
                <input
                  type="number"
                  value={component?.fontSize}
                  onInput={handleFontSize}
                  className={`input-decoration flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div
                className={`flex w-full items-center justify-center gap-[24px] `}
              >
                <input
                  type="range"
                  min={0}
                  max="250"
                  value={component?.fontSize}
                  onChange={handleFontSize}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            {/* alignments and decorations */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                Select Text Decorations
              </h2>
              <div
                className={`flex w-full items-center justify-between gap-[24px]`}
              >
                <div
                  onClick={handleTextUnderline}
                  className={`cursor-pointer rounded-[6px]  ${component?.textUnderline == true ? `bg-[#00b6ff]` : `bg-[#e8e9ea] hover:bg-[#c1edff] `} p-[6px]`}
                >
                  <TextUnderlineIcon classname={`h-[24px] w-[24px] `} />
                </div>
                <div
                  onClick={handleTextItalic}
                  className={`cursor-pointer rounded-[6px]  ${component?.textItalic == true ? `bg-[#00b6ff]` : `bg-[#e8e9ea] hover:bg-[#c1edff] `} p-[6px]`}
                >
                  <TextItalicIcon classname={`h-[24px] w-[24px] `} />
                </div>
                <div className={`m-[6px] h-[24px] w-[24px] `} />
                <div className={`m-[6px] h-[24px] w-[24px]`} />
              </div>
            </div>
            {/* weight  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Font Weight
                </h2>
                <input
                  type="text"
                  value={component?.fontWeight}
                  onChange={handleFontWeight}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div
                className={`flex w-full items-center justify-center gap-[24px] `}
              >
                <div className={`w-full`}>
                  <input
                    type="range"
                    min={100}
                    max="900"
                    value={component?.fontWeight}
                    onChange={handleFontWeight}
                    className="range range-info range-xs"
                    step="100"
                  />
                  <div className="flex w-full justify-between px-2 text-xs">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                  </div>
                </div>
              </div>
            </div>
            {/* lineheight */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Line Height
                </h2>
                <input
                  type="number"
                  value={component?.lineHeight}
                  onChange={handleLineHeight}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="flex items-center justify-between gap-[24px]">
                <LineHeightIcon classname={`h-[24px] w-[24px]`} />
                <input
                  type="range"
                  min={0}
                  max="250"
                  value={component?.lineHeight}
                  onChange={handleLineHeight}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Background Color
                </h2>
                <input
                  type="text"
                  value={component?.bgColor}
                  onChange={handleBgColor}
                  className={`flex w-[120px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="h-fit w-full overflow-hidden">
                <input
                  type="color"
                  value={component?.bgColor}
                  onInput={handleBgColor}
                  className="inset-0 h-[28px] w-full border-none bg-transparent outline-none"
                />
              </div>
            </div>
            {/* Border  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Border Width
                </h2>
                <input
                  type="text"
                  value={`${component?.border}`}
                  onChange={handleBorder}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div
                className={`flex w-full items-center justify-center gap-[24px] `}
              >
                <div className={`w-full`}>
                  <input
                    type="range"
                    min="0"
                    max="9"
                    value={`${component?.border}`}
                    onChange={handleBorder}
                    className="range range-info range-xs"
                    step="1"
                  />
                  <div className="flex w-full justify-between px-2 text-xs">
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Border Color
                </h2>
                <input
                  type="text"
                  value={component?.borderColor}
                  onChange={handleBorderColor}
                  className={`flex w-[120px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="h-fit w-full overflow-hidden">
                <input
                  type="color"
                  value={component?.borderColor}
                  onInput={handleBorderColor}
                  className="inset-0 h-[28px] w-full border-none bg-transparent outline-none"
                />
              </div>
            </div>
            {/* letter spacing */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Padding X
                </h2>
                <input
                  type="text"
                  value={`${component?.paddingX}`}
                  onChange={handlePaddingX}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="flex items-center justify-between gap-[24px]">
                <LetterSpacingIcon classname={`h-[24px] w-[24px]`} />
                <input
                  type="range"
                  min={0}
                  max="50"
                  value={`${component?.paddingX}`}
                  onChange={handlePaddingX}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            {/* Padding Y*/}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Padding Y
                </h2>
                <input
                  type="text"
                  value={`${component?.paddingY}`}
                  onChange={handlePaddingY}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="flex items-center justify-between gap-[24px]">
                <LetterSpacingIcon classname={`h-[24px] w-[24px]`} />
                <input
                  type="range"
                  min={0}
                  max="50"
                  value={`${component?.paddingY}`}
                  onChange={handlePaddingY}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            {/* letter spacing */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Letter Spacing
                </h2>
                <input
                  type="text"
                  value={component?.letterSpacing}
                  onChange={handleLetterSpacing}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="flex items-center justify-between gap-[24px]">
                <LetterSpacingIcon classname={`h-[24px] w-[24px]`} />
                <input
                  type="range"
                  min={0}
                  max="50"
                  value={component?.letterSpacing}
                  onChange={handleLetterSpacing}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            {/* Border Radius */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div className={`flex items-center justify-between`}>
                <h2 className={` text-[16px] font-semibold text-[#494949]`}>
                  Select Border Radius
                </h2>
                <input
                  type="text"
                  value={`${component?.borderRadius}`}
                  onChange={handleBorderRadius}
                  className={`flex w-[56px] items-center justify-center rounded-[8px] border-2 border-[#f2f2f2] py-[2px] text-center text-[16px] outline-none`}
                />
              </div>
              <div className="flex items-center justify-between gap-[24px]">
                <LetterSpacingIcon classname={`h-[24px] w-[24px]`} />
                <input
                  type="range"
                  min={0}
                  max="100"
                  value={`${component?.borderRadius}`}
                  onChange={handleBorderRadius}
                  className="range range-info range-xs"
                />
              </div>
            </div>
            {/* delete  */}
            <div
              className={`flex flex-col gap-[8px] border-b-2 border-gray-200 p-[12px]`}
            >
              <div
                className={`flex cursor-pointer items-center justify-center rounded-[4px] bg-[#f87171] py-[4px] font-semibold text-white`}
              >
                Delete This Text
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Btn_Toolbox_Studio;
