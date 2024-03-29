import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = NextResponse.json({
      message: "Logout Successfull!",
      success: true,
    });
    res.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return res;
  } catch (err) {
    console.log("Logout Failed - " + err);
    return NextResponse.json({ error: err });
  }
}
