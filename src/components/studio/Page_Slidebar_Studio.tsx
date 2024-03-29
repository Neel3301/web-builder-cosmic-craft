"use client";
import { titillium_Web } from "@/assets/Fonts";
import { CrossIcon } from "@/assets/Svgs";
import use_Model_Store from "@/store/studio/Model_Store";

const Page_Sidebar_Studio = () => {
  const [studioPageSliderIsOpen, studioPageSliderOnClose] = use_Model_Store(
    (s) => [s.studioPageSliderIsOpen, s.studioPageSliderOnClose],
  );
  return (
    <>
      {studioPageSliderIsOpen && (
        <div
          className={`min-w-[320px] border-r-2 border-t-[5px] bg-white ${titillium_Web.className} border-[#f2f2f2]  border-t-[#00b6ff] p-[12px]`}
          style={{ height: `calc(100vh - 120px)` }}
        >
          {/* text editor and cross  */}
          <div
            className={`flex w-full items-center justify-between border-b-2 border-[#f2f2f2]  pb-[4px]`}
          >
            <h2 className={`text-[24px] font-bold text-[#424242]`}>
              Page Selector
            </h2>
            <div onClick={studioPageSliderOnClose}>
              <CrossIcon classname={`h-[24px] w-[24px] cursor-pointer`} />
            </div>
          </div>
          {/* timeline  */}
          <div
            className="custom-scrollbar w-full overflow-y-scroll"
            style={{ height: `calc(100% - 41.6px)` }}
          >
            <ul className="timeline timeline-vertical my-[24px]">
              <li>
                <div className="timeline-start timeline-box cursor-pointer">
                  Home
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box  cursor-pointer">
                  About-Us
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box cursor-pointer">
                  Page - 3
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box cursor-pointer">
                  Page - 4
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box cursor-pointer">
                  Page - 5
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box cursor-pointer">
                  Page - 6
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box cursor-pointer">
                  Page - 7
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box cursor-pointer">
                  Page - 8
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box cursor-pointer">
                  Page - 9
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box cursor-pointer">
                  Page - 10
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box cursor-pointer">
                  Page - 11
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box cursor-pointer">
                  Page - 12
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Page_Sidebar_Studio;
