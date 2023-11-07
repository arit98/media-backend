import mongoose, { connect } from "mongoose";
import { DATABASE_NAME } from "../constants";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DATABASE_NAME}`);
    console.log(`MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("ERR: ", error);
    throw process.exit(1);
  }
};
