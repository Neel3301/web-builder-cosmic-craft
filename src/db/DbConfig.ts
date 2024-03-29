import mongoose from "mongoose";

export async function ConnectDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("DB Connection - Success");
    return mongoose.Collection;
  } catch (err) {
    console.log("DB Connection - Failed => " + err);
  }
}
