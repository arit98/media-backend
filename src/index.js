import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/users.routes";

// connecting database
import "./db/db";

const app = express();

const port = 3000 | process.env.PORT;

// adding middlewares
app.use(bodyParser.json());
// adding routes
app.use("/api/user", routes);
// adding HTML
app.use(express.static("public"));



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
