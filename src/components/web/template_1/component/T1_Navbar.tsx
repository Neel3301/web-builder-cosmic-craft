"use client";
import { poppins, titillium_Web } from "@/assets/Fonts";
import { Menu, SearchIcon, ShoppingCartIcon, UserIcon1 } from "@/assets/Svgs";
import Component_Bg_Color from "@/components/Component_Bg_Color";
import Text from "@/components/Text";
import Add_Component from "@/helper/Add_Component";

import {
  t1_navbar,
  t1_navbar_link1,
  t1_navbar_link2,
  t1_navbar_link3,
  t1_navbar_link4,
  t1_navbar_title,
} from "@/lib/Id";
import { use_Component_Store } from "@/store/Component_Store";

import { Cross1Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

const T1_Navbar = ({ env }: any) => {
  // Adding Component
  Add_Component({
    id: t1_navbar,
    bgColor: "",
  });

  // Component Store
  const [Components] = use_Component_Store((s) => [s.Components]);

  // Finding Component
  const component = Components.find(
    (myComponent) => myComponent.id === t1_navbar,
  );

  // Toggle Menu
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Return
  return (
    <div
      className={`max-sm:p-[16px] relative w-full min-w-[320px] p-[24px]`}
      style={{ backgroundColor: `${component?.color}` }}
    >
      {/* handling color */}
      <Component_Bg_Color id={t1_navbar} />

      <div className={`flex items-center justify-center`}>
        <nav
          className={`flex w-full max-w-[1536px] items-center justify-between gap-[24px]`}
        >
          {/* logo */}
          <div className={`flex items-center justify-center gap-[8px]`}>
            <div
              className={`max-md:block hidden cursor-pointer text-[24px]`}
              onClick={handleToggle}
            >
              <Menu classname={`h-[18px] w-[18px]`} />
            </div>
            <Text
              tag={Link}
              href="/"
              content="SHOP.CO"
              cid={t1_navbar_title}
              fontStyle={titillium_Web.className}
              fontSize={32}
              fontWeight={900}
            />
          </div>

          {/* links  */}
          <div
            className={`max-lg:gap-[16px]  max-md:hidden max-md:gap-[24px] max-sm:gap-[16px] flex items-center justify-center gap-[24px] font-semibold`}
          >
            <Text
              tag={Link}
              href="/"
              content={"Home"}
              cid={t1_navbar_link1}
              fontStyle={poppins.className}
              fontWeight={600}
              fontSize={16}
            />
            <Text
              tag={Link}
              href="/"
              content={"New Arrivals"}
              cid={t1_navbar_link2}
              fontStyle={poppins.className}
              fontWeight={600}
              fontSize={16}
            />
            <Text
              tag={Link}
              href="/"
              content={"Brands"}
              cid={t1_navbar_link3}
              fontStyle={poppins.className}
              fontWeight={600}
              fontSize={16}
            />
            <Text
              tag={Link}
              href="/"
              content={"Contact Us"}
              cid={t1_navbar_link4}
              fontStyle={poppins.className}
              fontWeight={600}
              fontSize={16}
            />
          </div>
          {/* search  */}
          <div
            className={`flex flex-1 ${poppins.className} max-lg:py-[8px] max-md:hidden items-center justify-center gap-[8px] rounded-[62px] bg-[#f0f0f0] px-[12px]  py-[10px] text-[16px] `}
          >
            <SearchIcon classname="h-[24px] w-[24px] fill-[#c6c3c3]" />
            <input
              type="text"
              className={`w-full border-none bg-transparent outline-none`}
              placeholder="Search here..."
              contentEditable
            />
          </div>

          {/* icons  */}
          <div
            className={`max-lg:gap-[16px] max-md:gap-[24px] max-sm:gap-[16px] max-sm:text-[18px] flex items-center justify-center gap-[24px] text-[24px]`}
          >
            <div className={`max-md:block hidden`}>
              <SearchIcon />
            </div>
            <div className="relative">
              <Link href={env === "development" ? "#" : "/"}>
                <UserIcon1 classname={`h-[24px] w-[24px]`} />
              </Link>
            </div>
            <div className="relative">
              <Link href={env === "development" ? "#" : "/"}>
                <ShoppingCartIcon
                  classname={`h-[24px] w-[24px] fill-red-700`}
                />
              </Link>
            </div>
          </div>
          {/* hidden nav  */}
          {toggle && (
            <div
              className={`absolute left-0 top-0 z-50 flex h-screen w-screen min-w-[320px] flex-col items-center justify-start bg-white p-[16px]`}
            >
              {/* cross  */}
              <div
                className={`flex w-full justify-end text-[32px]`}
                onClick={() => setToggle(!toggle)}
              >
                <Cross1Icon className="h-[24px] w-[24px]" />
              </div>
              {/* links */}
              <div
                className={`flex h-full flex-col items-center justify-center gap-[8px] text-[24px]`}
              >
                <Text
                  tag={Link}
                  href="/"
                  content={"Home"}
                  cid={t1_navbar_link1}
                  fontStyle={poppins.className}
                  fontWeight={600}
                  fontSize={16}
                />
                <Text
                  tag={Link}
                  href="/"
                  content={"New Arrivals"}
                  cid={t1_navbar_link2}
                  fontStyle={poppins.className}
                  fontWeight={600}
                  fontSize={16}
                />
                <Text
                  tag={Link}
                  href="/"
                  content={"Brands"}
                  cid={t1_navbar_link3}
                  fontStyle={poppins.className}
                  fontWeight={600}
                  fontSize={16}
                />
                <Text
                  tag={Link}
                  href="/"
                  content={"Contact Us"}
                  cid={t1_navbar_link4}
                  fontStyle={poppins.className}
                  fontWeight={600}
                  fontSize={16}
                />
              </div>
            </div>
          )}
        </nav>
      </div>
      <div
        className={`max-md:flex mt-[12px] hidden flex-1 ${poppins.className} items-center justify-center gap-[8px] rounded-[62px] bg-[#f0f0f0] px-[12px]  py-[10px] text-[16px] `}
      >
        <SearchIcon classname="h-[24px] w-[24px] fill-[#c6c3c3]" />
        <input
          type="text"
          className={`w-full border-none bg-transparent outline-none`}
          placeholder="Search here..."
          contentEditable
        />
      </div>
    </div>
  );
};

export default T1_Navbar;
