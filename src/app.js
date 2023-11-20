import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const { urlencoded } = bodyParser;

const app = express();

app.use(
  cors({
    origin: process.env.URL_ORIGIN,
    Credential: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

// import routes
import userRouter from "./routes/users.routes"

app.use("/api/v1/users", userRouter)

export { app };
