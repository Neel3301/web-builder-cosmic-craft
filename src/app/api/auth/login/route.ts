import { ConnectDB } from "@/db/DbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";

ConnectDB();

export async function POST(req: NextRequest) {
  try {
    // data
    const reqData = await req.json();
    const { email, password } = reqData;

    // Finding User
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "User Dose Not Exist",
      });
    }

    // comparing password
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Credentials!" });
    }

    // creating token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "12h",
    });

    const response = NextResponse.json({
      message: "Login Successfull!",
      success: true,
      userData: {
        userId: user._id,
        username: user.username,
        email: user.email,
      },
    });

    // setting cookie
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    //returning
    return response;

    // catch
  } catch (err) {
    console.log("Login error -" + err);
    return NextResponse.json({
      error: "Something Went Wrong.",
    });
  }
}
