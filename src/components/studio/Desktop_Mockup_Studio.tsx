"use client";

import { poppins } from "@/assets/Fonts";
import { SearchIcon } from "@/assets/Svgs";
import use_Model_Store from "@/store/studio/Model_Store";
import T1_Home from "../web/template_1/app/t1_Home";
import T2_Home from "../web/template_2/app/page";
import T3_Home from "../web/template_3/app/page";
import T4_Home from "../web/template_4/app/page";

const Desktop_Mockup_Studio = ({ templateId }: any) => {
  const isNavbarVisible = use_Model_Store((s) => s.isNavbarVisible);

  return (
    <div
      className={`flex min-h-[500px] w-full max-w-[1380px] flex-col overflow-hidden rounded-[24px] border-2 border-[#f2f2f2] bg-white`}
      style={{
        height: ` ${isNavbarVisible == true ? `calc(100vh - 168px)` : `calc(100vh - 72px)`} `,
      }}
    >
      {/* top  */}
      <div
        className={`flex items-center justify-between gap-[24px] border-b p-[16px]`}
      >
        {/* 3 dots  */}
        <div className={`flex items-center  justify-center gap-[12px]`}>
          <div className={`h-[16px] w-[16px] rounded-full bg-red-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-yellow-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-green-400`}></div>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
        {/* url  */}
        <div
          className={`flex w-[550px] items-center justify-start gap-[8px] rounded-full bg-[#f1f1f1] p-[10px]`}
        >
          <SearchIcon classname={`h-[18px] w-[18px] fill-[#909090] `} />
          <span
            className={`${poppins.className} text-[14px] font-normal text-[#9ca3af]`}
          >
            https://cosmiccraft/shop.co/
          </span>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
      </div>
      {/* bottom  */}
      <div
        className={`custom-scrollbar h-full w-full overflow-x-hidden overflow-y-scroll`}
      >
        <div className="flex h-full w-full flex-col items-start  justify-start">
          {templateId == "guest" && (
            <div className="w-full">
              <T1_Home />
            </div>
          )}
          {templateId == "template_1" && (
            <div className="w-full">
              <T1_Home />
            </div>
          )}
          {templateId == "template_2" && (
            <div className="w-full">
              <T2_Home />
            </div>
          )}
          {templateId == "template_3" && (
            <div className="w-full">
              <T3_Home />
            </div>
          )}
          {templateId == "template_4" && (
            <div className="w-full">
              <T4_Home />
            </div>
          )}
          {templateId == "template_5" && (
            <div className="w-full">
              <T4_Home />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desktop_Mockup_Studio;
