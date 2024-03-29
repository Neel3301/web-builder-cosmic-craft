"use client";
import { salsa, titillium_Web } from "@/assets/Fonts";
import {
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  ReadIcon,
  SignoutIcon,
} from "@/assets/Svgs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface props {
  userId: String;
}

const Navbar_Dashboard = ({ userId }: props) => {
  // Router
  const router = useRouter();

  // handleLogout
  const handleLogout = async () => {
    try {
      const res = await axios.get("/api/auth/logout");

      if (res.data.success) {
        toast.success("Logout Successfull");
        router.push("/auth/login");
      }
      if (res.data.error) {
        toast.error(`${res.data.error}`);
      }
    } catch (err) {
      toast.error(`Something went wrong`);
      console.log("Logout Falied - " + err);
    }
  };
  return (
    <header
      className={`justify-cente flex w-full min-w-[1200px] flex-col items-center bg-white`}
    >
      <nav
        className={`flex h-[70px] w-full max-w-[1536px] items-center justify-between gap-[24px] border-b-2 border-[#f2f2f2] px-[24px]`}
      >
        {/* title  */}
        <Link
          href={`/studio/dashboard/${userId}`}
          className={`${salsa.className} block text-[28px] font-extrabold`}
        >
          Cosmic Craft
        </Link>

        {/* links  */}
        <div className={`flex h-full items-center justify-center`}>
          {/* Hire a Professional */}
          <div
            className={`${titillium_Web.className} h-full border-l-2 border-[#f2f2f2] `}
          >
            <div
              className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] font-semibold hover:text-main`}
            >
              <EmailIcon classname="h-[24px] w-[24px] fill-[#464646]" />
              <Link href={`/`}>Hire a Professional</Link>
            </div>
          </div>
          {/* View Documentation */}
          <div
            className={`${titillium_Web.className} h-full border-l-2 border-[#f2f2f2] `}
          >
            <div
              className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] font-semibold hover:text-main`}
            >
              <ReadIcon classname="h-[21px] w-[21px] fill-[#464646]" />
              <Link href={`/`}>View Documentation</Link>
            </div>
          </div>
          {/* Signout Us */}
          <div
            className={`${titillium_Web.className} h-full  cursor-pointer border-l-2 border-[#f2f2f2] `}
          >
            <div
              className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] font-semibold hover:text-main`}
              onClick={handleLogout}
            >
              <SignoutIcon classname="h-[24px] w-[24px] fill-[#464646]" />
              Log out
            </div>
          </div>
        </div>
        {/* flex - 1  */}
        <div className={`flex-1`} />
        {/* icons  */}
        <LinkedInIcon classname={`h-[26px] w-[26px] cursor-pointer`} />
        <InstagramIcon classname={`h-[26px] w-[26px] cursor-pointer`} />
        <div
          className={`${titillium_Web.className} h-full border-l-2  border-[#f2f2f2]  `}
        >
          <Link
            href={`/`}
            className={`flex h-full items-center justify-center gap-[8px] px-[12px] text-[16px] hover:text-main`}
          >
            <Image
              src="/github.gif"
              alt="a"
              height={32}
              width={32}
              unoptimized
            />
            <span className={`text-[16px] font-semibold`}>
              Contribute / Get Project Code
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar_Dashboard;
