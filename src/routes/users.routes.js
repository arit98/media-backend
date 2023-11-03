import express from "express";
import { getAllUser } from "../controllers/users.controllers";

const routes = express.Router();

routes.get("/",getAllUser)

export default routes;