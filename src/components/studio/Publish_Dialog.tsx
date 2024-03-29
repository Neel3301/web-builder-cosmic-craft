"use client";
import { titillium_Web } from "@/assets/Fonts";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { use_Text_Store } from "@/store/Text_Store";
import { use_Image_Store } from "@/store/Image_Store";
import { use_Btn_Store } from "@/store/Btn_Store";
import { use_Component_Store } from "@/store/Component_Store";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export function Publish_Website({ templateId }: any) {
  // fetching  website data
  const TextComponents = use_Text_Store((s) => s.TextComponents);
  const ImageComponents = use_Image_Store((s) => s.ImageComponents);
  const BtnComponents = use_Btn_Store((s) => s.BtnComponents);
  const Components = use_Component_Store((s) => s.Components);

  // Form Data
  const [formData, setFormData] = useState({
    website_id: "",
  });

  // Handling Input Change
  const handleInputChange = (e: any) => {
    setFormData({
      website_id: e.target.value,
    });
  };

  // Router
  const router = useRouter();

  // Loading
  const [isLoading, setLoading] = useState(false);

  // Handle Publish
  const handlePublish = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(ImageComponents);
      const res = await axios.post("/api/web/create_web", {
        text: TextComponents,
        components: Components,
        image: ImageComponents,
        btn: BtnComponents,
        templateId: templateId,
        website_id: formData.website_id.toLowerCase(),
      });
      console.log(res);
      if (res.data.success) {
        toast.success("Website Created!, Redirecting...");
        router.push(`/web/${formData.website_id.toLowerCase()}`);
      }
      if (res.data.error) {
        toast.error(`${res.data.error}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      {/* toaster  */}
      <Toaster />
      <DialogTrigger asChild>
        <Button
          className={`rounded-full bg-main px-[22px] py-[18px] text-[16px] text-white hover:bg-main/75`}
        >
          Publish
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`gap-0 rounded-[8px] bg-white px-[24px] py-[32px]  ${titillium_Web.className}`}
      >
        <DialogHeader>
          <DialogTitle className="text-start text-[24px]">
            Do you really want to publish this Website ?
          </DialogTitle>
          <DialogDescription className="text-start text-[14px]">
            Before publishing first you need to provide unique Website Name.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlePublish}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className=" text-right text-[16px]">
                Website Name
              </Label>
              <input
                id="name"
                placeholder="cosmic.craft"
                required
                onChange={handleInputChange}
                className="col-span-3 border-b border-main py-[8px] text-[18px] outline-none"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1 rounded-[4px] bg-main py-[22px] text-[18px] font-semibold text-white hover:bg-main/75"
            >
              {isLoading ? (
                <span className="loading loading-dots loading-lg"></span>
              ) : (
                "Publish Now"
              )}
            </Button>
            <DialogClose asChild>
              <Button
                className={`flex rounded-[4px] px-[42px] py-[22px] text-[18px] font-semibold`}
                variant={"outline"}
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
