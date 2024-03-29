"use client";
import Page_Not_Found from "@/app/404";
import Loading from "@/app/loading";
import { titillium_Web } from "@/assets/Fonts";
import Customize_Website from "@/components/studio/Customize_Website_Dashboard";
import Navbar_Dashboard from "@/components/studio/Navbar_Dashboard";
import Select_Your_Template from "@/components/studio/Select_Your_Template_Dashboard";
import { UserInterface } from "@/models/User";
import axios from "axios";
import { useEffect, useState } from "react";

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

export default Dashboard_Page;
