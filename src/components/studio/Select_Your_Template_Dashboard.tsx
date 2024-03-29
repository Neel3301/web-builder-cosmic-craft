import { Toaster } from "react-hot-toast";
import Template_Card from "./Template_Card";

const Select_Your_Template = ({ params }: any) => {
  return (
    <div className={`px-[24px] pb-[24px]`}>
      <Toaster />
      <h2 className={`text-start text-[28px] font-semibold`}>
        Select Your Template
      </h2>
      <div
        className={`flex flex-wrap items-center justify-between gap-[24px] pt-[24px]`}
      >
        <Template_Card
          img="/template-4.png"
          templateId="template_1"
          userId={params.userId}
        />
        <Template_Card
          img="/template-2.png"
          templateId="template_2"
          userId={params.userId}
        />
        <Template_Card
          img="/template-3.png"
          templateId="template_3"
          userId={params.userId}
        />
        <Template_Card
          img="/template-1.png"
          templateId="template_4"
          userId={params.userId}
        />
      </div>
    </div>
  );
};

export default Select_Your_Template;
