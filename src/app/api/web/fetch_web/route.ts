import { ConnectDB } from "@/db/DbConfig";
import Website from "@/models/Website";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { website_id } = reqData;

    const websiteData = await Website.findOne({ website_id });

    const response = NextResponse.json({
      message: "Website Data fetch Successfully!",
      success: true,
      websiteData: websiteData,
    });
    return response;
  } catch (err) {
    console.log("Website Data Fetching error -" + err);
    return NextResponse.json({ error: err });
  }
}
