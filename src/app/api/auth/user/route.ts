import { ConnectDB } from "@/db/DbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { id } = reqData;
    const user = await User.findById(id);
    return NextResponse.json({
      message: "User Data",
      user: user,
      success: true,
    });
  } catch (err) {
    // console.log(err);
    return NextResponse.json({ error: err });
  }
}
