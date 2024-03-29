"use client";
import { titillium_Web } from "@/assets/Fonts";
import Btn_Toolbox_Studio from "@/components/studio/Btn_Toolbox_Studio";
import Desktop_Mockup_Studio from "@/components/studio/Desktop_Mockup_Studio";
import Image_Toolbox_Studio from "@/components/studio/Image_Toolbox_Studio";
import Mobile_MockUp_Studio from "@/components/studio/Mobile_Mockup_Studio";
import Navbar_Studio from "@/components/studio/Navbar_Editor";
import Page_Sidebar_Studio from "@/components/studio/Page_Slidebar_Studio";
import Text_Toolbox_Studio from "@/components/studio/Text_Toolbox_Studio";
import use_Model_Store from "@/store/studio/Model_Store";

const Editor = ({ params }: any) => {
  const [whichMockup] = use_Model_Store((s) => [s.whichMockup]);
  return (
    <main
      className={`flex min-w-[1200px] flex-col  items-center justify-center`}
    >
      <div className={`${titillium_Web.className} max-w-[1536px]`}>
        <Navbar_Studio />
      </div>
      <div className={`flex w-full`}>
        <Page_Sidebar_Studio />
        <Text_Toolbox_Studio />
        <Image_Toolbox_Studio />
        <Btn_Toolbox_Studio />
        <div className={`flex w-full items-center justify-center p-[24px]`}>
          {/* {params.editorId} */}
          {whichMockup === "desktop" ? (
            <Desktop_Mockup_Studio templateId={params.editorId} />
          ) : (
            <Mobile_MockUp_Studio />
          )}
        </div>
      </div>
    </main>
  );
};

export default Editor;
