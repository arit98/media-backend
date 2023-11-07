import dotenv from "dotenv";
import { connectDB } from "./db/index";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    console.log(`⚙️ Server is running at port: ${process.env.PORT}`);
  })
  .catch((error) => {
    console.log("MongoDB connection failed !!! ", error);
  });

/*
import express from "express";
const app = express(); 

(async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${DATABASE_NAME}`);
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERR: ", error);
    throw error;
  }
})();
*/
