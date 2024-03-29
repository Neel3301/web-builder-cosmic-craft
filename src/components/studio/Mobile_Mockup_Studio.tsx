"use client";

import use_Model_Store from "@/store/studio/Model_Store";

const Mobile_MockUp_Studio = () => {
  const isNavbarVisible = use_Model_Store((s) => s.isNavbarVisible);
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <iframe
            src="https://my-portfolio-umo7.vercel.app/"
            height={568}
            width={320}
            content="width=device-width, initial-scale=1.0"
            title="description"
            className="border-none"
            style={{
              height: ` ${isNavbarVisible == true ? `calc(100vh - 168px)` : `calc(100vh - 72px)`} `,
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Mobile_MockUp_Studio;
