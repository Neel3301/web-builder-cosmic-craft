"use client";
import Loading from "@/app/loading";
import { salsa, titillium_Web } from "@/assets/Fonts";
import { IncognitoIcon } from "@/assets/Svgs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup_Page = () => {
  // form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // router
  const router = useRouter();

  // handle submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/signup", formData);
      if (res.data.success) {
        toast.success("Account Created!, Redirecting...");
        router.push("/auth/login");
      }
      if (res.data.error) {
        toast.error(`${res.data.error}`);
      }
    } catch (err) {
      toast.error(`Something went wrong, please try again`);
      console.log("Signup Failed - ", err);
    } finally {
      setLoading(false);
    }
  };

  // handle loading
  const [isLoading, setLoading] = useState(false);

  // return
  return (
    <main
      className={`flex ${titillium_Web.className} h-[100vh] max-h-[720px] w-full min-w-[1200px] flex-row-reverse items-start justify-center gap-[200px]`}
    >
      {/* Toaster  */}
      <Toaster />
      {/* left  */}
      <div className={`flex h-full flex-col items-start justify-center`}>
        {/* login title  */}
        <div className={`flex flex-col`}>
          <h2 className={`text-[52px] font-bold text-main `}>Sign Up</h2>
          <p className={`max-w-[400px]  text-[14px] font-light`}>
            Register to continue and explore{" "}
            <span className={`${salsa.className}`}>Cosmic Craft</span>. an old
            school web builder
          </p>
        </div>
        {/* form  */}
        <form onSubmit={handleSubmit} method="POST">
          {/* email add  */}
          <div className={`mt-[52px] flex flex-col `}>
            <label htmlFor="" className={`text-[16px]`}>
              Username :
            </label>
            <input
              type="text"
              placeholder="example"
              name="username"
              disabled={isLoading}
              required
              minLength={3}
              onChange={handleInputChange}
              className={`w-[400px] border-b border-main bg-transparent py-[8px] text-[18px] outline-none`}
            />
          </div>
          {/* email add  */}
          <div className={`mt-[32px] flex flex-col `}>
            <label htmlFor="" className={`text-[16px]`}>
              Email Address :
            </label>
            <input
              type="email"
              placeholder="example@example.com"
              name="email"
              disabled={isLoading}
              onChange={handleInputChange}
              required
              className={`w-[400px] border-b border-main bg-transparent py-[8px] text-[18px] outline-none`}
            />
          </div>
          {/* password */}
          <div className={`mt-[32px] flex flex-col `}>
            <label htmlFor="" className={`text-[16px]`}>
              Password :
            </label>
            <input
              type="password"
              placeholder="******"
              name="password"
              disabled={isLoading}
              onChange={handleInputChange}
              minLength={6}
              required
              className={`w-[400px] border-b border-main bg-transparent py-[8px] text-[18px] outline-none`}
            />
          </div>
          {/* btn  */}
          <Button
            type="submit"
            disabled={isLoading}
            className={`mt-[32px] w-full rounded-[4px] bg-main py-[24px] text-[18px] text-white hover:bg-main/75  `}
          >
            {isLoading ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Sign Up"
            )}
          </Button>
        </form>
        {/* dont have acc  */}
        <Button className={`mt-[12px]  p-0 text-[14px]`} variant={"link"}>
          <Link href={"/auth/login"}>
            {"Already have an account?"}{" "}
            <span className={`font-semibold text-[#00b6ff]`}>Log In</span>
          </Link>
        </Button>
        {/* Google Login  */}
        <div
          className={`mt-[12px]  flex w-full items-center justify-start gap-[24px]`}
        >
          <p className={`text-nowrap text-[20px] font-normal`}>
            or continue as
          </p>

          <Link className={`w-full`} href={"/guest"}>
            <Button
              variant={"outline"}
              className={`flex w-full items-center justify-center gap-[12px] rounded-[4px] py-[24px]`}
            >
              <IncognitoIcon classname={`h-[24px] w-[24px]`} />
              <p className={`font-norma text-[18px]`}>Guest</p>
            </Button>
          </Link>
        </div>
      </div>
      {/* right  */}
      <div className={`flex h-full  items-center justify-center`}>
        {/* img  */}
        <Image src={`/Block.png`} height={380} width={490} alt="bg" />
      </div>
    </main>
  );
};

export default Signup_Page;
