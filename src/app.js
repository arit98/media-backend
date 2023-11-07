import express from "express";
import cros from "cros";
import { urlencoded } from "body-parser";

const app = express();

app.use(
  cros({
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

export { app };
