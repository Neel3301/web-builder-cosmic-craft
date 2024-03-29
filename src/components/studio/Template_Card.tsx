import Image from "next/image";
import { useRouter } from "next/navigation";

interface Template_Card_Interface {
  img: string;
  // websiteId: string;
  // userId: string;
  templateId: string;
  userId: string;
}

const Template_Card = ({
  img,
  // websiteId,
  // userId,
  templateId,
  userId,
}: Template_Card_Interface) => {
  // Router
  const router = useRouter();

  // Handle Click
  const handleClick = () => {
    router.push(`/studio/dashboard/${userId}/editor/${templateId}`);
  };

  return (
    <div
      className={`max-1480px:w-[430px] max-1300px:w-[360px]  max-1410px:w-[400px] max-1410px:h-[250px] relative h-[280px] w-[460px] cursor-pointer rounded-[12px] border bg-white`}
      onClick={handleClick}
    >
      <Image src={img} alt="t1" fill />
    </div>
  );
};

export default Template_Card;
