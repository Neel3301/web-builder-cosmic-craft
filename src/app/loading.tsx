import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image src={`/loading.gif`} alt="loading..." height={100} width={100} />
    </div>
  );
};

export default Loading;
