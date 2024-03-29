import Image from "next/image";

const Page_Not_Found = () => {
  return (
    <div className="relative h-screen w-screen">
      <Image src={"/Page_Not_Found.gif"} fill alt="404" />
    </div>
  );
};

export default Page_Not_Found;
