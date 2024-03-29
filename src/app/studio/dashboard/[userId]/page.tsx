"use client";
import Page_Not_Found from "@/app/404";
import Loading from "@/app/loading";
import { titillium_Web } from "@/assets/Fonts";
import Navbar_Dashboard from "@/components/studio/Navbar_Dashboard";
import Template_Card from "@/components/studio/Template_Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserInterface } from "@/models/User";
import Website from "@/models/Website";
import { CopyIcon } from "@radix-ui/react-icons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const Dashboard_Page = ({ params }: any) => {
  // Loading
  const [isLoading, setLoading] = useState(true);

  // User Data
  const [userData, setUserData] = useState<UserInterface | undefined>();

  // Error Handling If USer Not Found
  const [error, setError] = useState(false);

  const [websiteData, setWebsiteData] = useState<any>();

  // Fetching User Data On Load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("/api/auth/user", {
          id: params.userId,
        });

        if (res.data.success) {
          setUserData(res.data.user);

          const websiteDataRes = await axios.post("/api/web/fetch_user_webs", {
            user_id: params.userId,
          });
          setWebsiteData(websiteDataRes.data.websiteData);
          console.log(websiteDataRes.data.websiteData);
        }
        if (res.data.error) {
          console.error(res.data.error);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData().then(() => {
      setLoading(false);
    });
  }, [params.userId, setError]);

  if (error == true) {
    return <Page_Not_Found />;
  }

  if (isLoading == true) {
    return <Loading />;
  }

  return (
    <main className={`flex min-w-[1200px]  items-center justify-center`}>
      {/* Toaster */}
      <Toaster />
      <div className={`${titillium_Web.className} max-w-[1536px] pb-[24px]`}>
        <Navbar_Dashboard userId={params.userId} />
        <div className={`flex w-full items-center justify-start px-[24px]`}>
          {/* Greeting  */}
          <h1
            className={`text-[72px] ${titillium_Web.className} font-extrabold`}
          >
            Welcome, <span className={`text-main`}>{userData?.username}</span>
          </h1>
        </div>
        {/* Customixe Website  */}
        {userData && userData.website && userData.website.length !== 0 && (
          <div className={`px-[24px]`}>
            <h2 className={`text-start text-[28px] font-semibold`}>
              Customize Your Website
            </h2>
          </div>
        )}
        {userData && userData.website && userData.website.length !== 0 && (
          <div>
            {websiteData?.map((data: any) => (
              <Customize_Website key={data._id} data={data} />
            ))}
          </div>
        )}
        {/* Templatr Select  */}
        <Select_Your_Template params={params} />
      </div>
    </main>
  );
};
export const Customize_Website = ({ data }: any) => {
  const underDevelopment = () => {
    toast.error("Under Development");
  };
  return (
    <div className={`px-[24px] pb-[24px]`}>
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

export const Select_Your_Template = ({ params }: any) => {
  return (
    <div className={`px-[24px] pb-[24px]`}>
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

export default Dashboard_Page;
