import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast, { Toaster } from "react-hot-toast";
import { CopyIcon } from "@radix-ui/react-icons";

const Customize_Website = ({ data }: any) => {
  const underDevelopment = () => {
    toast.error("Under Development");
  };
  return (
    <div className={`px-[24px] pb-[24px]`}>
      <Toaster />
      <div
        className={`flex flex-wrap items-start justify-start gap-[24px] pt-[24px]`}
      >
        <div
          className={`relative h-[480px] w-[850px] cursor-pointer rounded-[12px] border bg-white`}
        >
          <Image src={"/template-4.png"} alt="t1" fill />
        </div>
        <div className={`flex flex-1 flex-col`}>
          <h2 className={`text-[28px] font-semibold`}>
            Website : {data.website_id}
          </h2>
          <div
            className={`mt-[24px] flex items-center justify-center gap-[12px]`}
          >
            <h2 className={`whitespace-nowrap text-[18px] font-semibold`}>
              Website Url :
            </h2>
            <Input
              id="link"
              className="py-[18px] text-[18px]"
              defaultValue={`http://localhost:3000/web/${data.website_id}`}
              readOnly
            />
            <Button
              onClick={() => {
                navigator.clipboard
                  .writeText(`http://localhost:3000/web/${data.website_id}`)
                  .then(() => {
                    toast.success("Link Copied");
                  });
              }}
              size="sm"
              className="rounded-[4px] bg-main p-[18px] hover:bg-main/75"
            >
              <span className="sr-only">Copy</span>
              <CopyIcon className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* Customize template */}
          {/* <Link href={`/studio/dashboard/`}> */}
          <Button
            onClick={underDevelopment}
            className={`mt-[24px] flex-1 rounded-[4px] bg-main py-[12px] text-[18px] font-bold text-white hover:bg-main/75`}
          >
            Customize This Website
          </Button>
          {/* </Link> */}
          <div className={`mt-[24px] flex gap-[12px]`}>
            <Button
              onClick={underDevelopment}
              variant={"outline"}
              className={` flex-1 rounded-[4px]  py-[24px] text-[18px] font-bold`}
            >
              Add Product
            </Button>
            <Button
              variant={"outline"}
              onClick={underDevelopment}
              className={` flex-1 rounded-[4px]  py-[24px] text-[18px] font-bold`}
            >
              Delete Product
            </Button>
          </div>
          <div className={`mt-[24px] flex gap-[12px]`}>
            <Button
              variant={"outline"}
              onClick={underDevelopment}
              className={` flex-1 rounded-[4px]  py-[24px] text-[18px] font-bold`}
            >
              View Sales
            </Button>
          </div>

          {/* Manage Sales */}
        </div>
      </div>
    </div>
  );
};

export default Customize_Website;
