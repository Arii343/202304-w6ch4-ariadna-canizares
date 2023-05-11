import express from "express";
import { getThings } from "./controllers/things/thingsControllers.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/things", getThings);

export default app;
