import { config } from "dotenv";
import mongoose from "mongoose";

config();

const url = process.env.DB_URL;

mongoose.connect(url);

const db = mongoose.connection;

db.on("open", () => {
    console.log("database connected");
});

export default db;