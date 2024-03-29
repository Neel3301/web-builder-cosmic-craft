import mongoose, { Schema, Document } from "mongoose";

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
  website?: string[];
  verifyToken?: string;
  verifyTokenExpire?: Date;
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      min: [2, "Username must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      min: [6, "Password must be at least 6 characters long"],
    },
    website: [String],
    verifyToken: String,
    verifyTokenExpire: Date,
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model<UserInterface>("User", userSchema);

export default User;
