import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function getTokenData(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value || "";

    // Check if token is present
    if (!token) {
      console.warn("JWT token not found");
      return NextResponse.json("JWT token not found", { status: 401 });
    }

    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);

    const userData = {
      id: decodedToken.id,
      username: decodedToken.username,
      email: decodedToken.email,
    };

    // Return the user data
    return userData;

    // catch
  } catch (error: any) {
    console.error("Error fetching user data:", error);
    return NextResponse.json("Error fetching user data", { status: 500 });
  }
}
