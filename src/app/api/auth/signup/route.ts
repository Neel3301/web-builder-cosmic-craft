import { ConnectDB } from "@/db/DbConfig";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const { username, email, password } = reqData;

    // checking user already exist ?
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({
        error: "User Already Exist",
      });
    }

    // hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // creating account
    await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    // return
    return NextResponse.json({
      message: "Account Created!",
      success: true,
    });

    // catch
  } catch (err: any) {
    console.log("Signup error -" + err);
    return NextResponse.json({ error: "Something Went Wrong." });
  }
}
