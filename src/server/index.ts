import express from "express";
import { getThings } from "./controllers/things/thingsControllers.js";
import { getThing } from "./controllers/things/thingsControllers.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/things", getThings);

app.get("/things/:idThing", getThing);

export default app;
