import { ConnectDB } from "@/db/DbConfig";
import { getTokenData } from "@/helper/getTokenData";
import User from "@/models/User";
import Website from "@/models/Website";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { text, components, btn, image, templateId, website_id } = reqData;

    const tokenData: any = await getTokenData(req);

    const { id } = tokenData;

    // Checking Website Already Exist
    const website = await Website.findOne({ website_id: website_id });
    if (website) {
      return NextResponse.json({
        error: "This Name Is Already Taken!",
      });
    }

    for (let i = 0; i < image.length; i++) {
      const result = await cloudinary.uploader.upload(image[i].img, {
        folder: "uploads",
        resource_type: "auto",
      });
      image[i].img = "";
      image[i].displayImg = "";
      image[i].imgUrl = result.url;
    }

    console.log("Image uploaded !!!");
    console.log(templateId);

    console.log("creating website ....");
    const websiteData = await new Website({
      website_id: website_id,
      user_id: id,
      template_id: templateId,
      text: text,
      image: image,
      btn: btn,
      component: components,
    }).save();

    console.log("Website Created !!!");

    const user = await User.findById({ _id: id });
    user.website.push(websiteData._id);
    await user.save();

    console.log("website Linked !!!");

    return NextResponse.json({ message: "Website Created", success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Something Went Wrong." });
  }
}
