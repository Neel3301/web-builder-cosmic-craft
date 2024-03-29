"use client";
import { titillium_Web } from "@/assets/Fonts";
import Btn from "@/components/Btn";
import Component_Bg_Color from "@/components/Component_Bg_Color";
import My_Image from "@/components/Image";
import Text from "@/components/Text";
import Add_Component from "@/helper/Add_Component";
import {
  img_path,
  t1_landing,
  t1_landing_btn,
  t1_landing_h1,
  t1_landing_img,
  t1_stack_data_num1,
  t1_stack_data_num2,
  t1_stack_data_num3,
  t1_stack_data_text1,
  t1_stack_data_text2,
  t1_stack_data_text3,
} from "@/lib/Id";
import { use_Component_Store } from "@/store/Component_Store";

const T1_Landing = () => {
  const [selectedId, Components, addComponents, setSelectedId] =
    use_Component_Store((s) => [
      s.selectedId,
      s.Components,
      s.addComponents,
      s.setSelectedId,
    ]);

  // add component
  Add_Component({
    id: t1_landing,
    bgColor: "#f2f0f1",
  });

  // get Component
  const component = Components.find(
    (myComponent) => myComponent.id === t1_landing,
  );

  return (
    <main
      className={`relative w-full min-w-[320px]`}
      style={{ backgroundColor: `${component?.color}` }}
    >
      <Component_Bg_Color id={t1_landing} />
      <div className={`flex items-center justify-center`}>
        {/* main flex div  */}
        <div
          className={`flex w-full max-w-[1536px] items-center justify-center  gap-[24px] px-[32px] pt-[32px] max-lgmd:flex-col max-lgmd:gap-0`}
        >
          {/* left  */}
          <div className={`pb-[32px]`}>
            {/* landing main title */}
            <Text
              classname="tracking-wide leading-none max-w-[550px] max-xl:text-[54px] max-lg:text-[44px] "
              tag={`h1`}
              content="FIND CLOTHES THAT MATCHES YOUR STYLE"
              cid={t1_landing_h1}
              fontStyle={titillium_Web.className}
              fontSize={64}
              fontWeight={900}
              textAlignment="start"
            />
            {/* landing btn */}
            <div className={`mt-[24px] w-fit`}>
              <Btn
                classname={`max-lg:text-[14px]`}
                cid={t1_landing_btn}
                content="Shop Now"
                fontSize={16}
                fontStyle={`${titillium_Web.className}`}
                textColor="#fff"
                borderRadius={64}
                bgColor="#000"
                fontWeight={600}
                paddingX={54}
                paddingY={16}
              />
            </div>
            {/* landing stacks */}
            <div
              className={`mt-[24px] flex w-full flex-wrap items-center justify-start gap-[24px] ${titillium_Web.className} font-bold`}
            >
              {/* stack 1 */}
              <div className={`flex flex-col items-start justify-center`}>
                {/* number */}
                <div>
                  <Text
                    classname={`max-xl:text-[32px] max-lg:text-[24px] `}
                    cid={t1_stack_data_num1}
                    tag={`span`}
                    content="200+"
                    fontSize={40}
                  />
                </div>
                {/* desc */}
                <div>
                  <Text
                    classname={`max-xl:text-[14px]  max-lg:text-[12px]`}
                    cid={t1_stack_data_text1}
                    tag={`span`}
                    content="International Brands"
                    fontSize={16}
                    fontStyle={titillium_Web.className}
                    fontWeight={400}
                    textColor="#484848"
                  />
                </div>
              </div>
              {/* stack 2 */}
              <div className={`flex flex-col items-start justify-center`}>
                {/* number */}
                <div>
                  <Text
                    classname={`max-xl:text-[32px] max-lg:text-[24px] `}
                    cid={t1_stack_data_num2}
                    tag={`span`}
                    content="2,000+"
                    fontSize={40}
                  />
                </div>
                {/* desc */}
                <div>
                  <Text
                    classname={`max-xl:text-[14px]  max-lg:text-[12px]`}
                    cid={t1_stack_data_text2}
                    tag={`span`}
                    content="High-Quality Products"
                    fontSize={16}
                    fontStyle={titillium_Web.className}
                    fontWeight={400}
                    textColor="#484848"
                  />
                </div>
              </div>
              {/* stack 3 */}
              <div className={`flex flex-col items-start justify-center`}>
                {/* number */}
                <div>
                  <Text
                    classname={`max-xl:text-[32px] max-lg:text-[24px] `}
                    cid={t1_stack_data_num3}
                    tag={`span`}
                    content="30,000+"
                    fontSize={40}
                  />
                </div>
                {/* desc */}
                <div>
                  <Text
                    classname={`max-xl:text-[14px]  max-lg:text-[12px]`}
                    cid={t1_stack_data_text3}
                    tag={`span`}
                    content="Happy Customers"
                    fontSize={16}
                    fontStyle={titillium_Web.className}
                    fontWeight={400}
                    textColor="#484848"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="max-sm:min-w-[400px]">
            <My_Image
              cid={t1_landing_img}
              img={`/Landing_1.png`}
              height={500}
              width={500}
              classname={``}
            />
          </div>
        </div>
      </div>
      <p className="p-[24px]">
        Note : This Project Is Under Development you might get error wiile
        publishing website please click on image and select image from your pc
        to continue I will soon fix this bug.
      </p>
    </main>
  );
};

export default T1_Landing;
