import My_Image from "@/components/Image";
import T1_Navbar from "../component/T1_Navbar";
import Btn from "@/components/Btn";
import T1_Landing from "../component/T1_Landing";

const T1_Home = () => {
  return (
    <div className="min-w-[320px]">
      <T1_Navbar />
      <T1_Landing />

      {/* <div className="flex gap-[24px]">
        <My_Image cid="Apple" img="/Block.png" height={300} width={300} />
        <My_Image cid="greenPurple" img="/Block.png" height={300} width={300} />
      </div>
      <Btn cid="Alfa" content="Click Me" /> */}
    </div>
  );
};

export default T1_Home;
