import T1_Home from "@/components/web/template_1/app/t1_Home";
import T2_Home from "@/components/web/template_2/app/page";
import T3_Home from "@/components/web/template_3/app/page";
import T4_Home from "@/components/web/template_4/app/page";

const Web = ({ params }: any) => {
  // params.id -> name fetch
  // check in datadase if exist fetch information else say no page found
  // once data fetch get template id and render page acrodingly
  // using params.id fetch website name from that name you can find template_id and render accroadingly
  // page -> t1_home -> t1_navbar -> text
  // if text env == production fetch data from db and show it problem : how ?
  // we have path /web/websitename/....

  return (
    <div>
      <T1_Home />
      {/* <T2_Home />
      <T3_Home />
      <T4_Home /> */}
    </div>
  );
};

export default Web;
