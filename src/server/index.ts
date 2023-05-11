import express from "express";
import {
  deleteThing,
  getThings,
  getThing,
} from "./controllers/things/thingsControllers.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/things", getThings);

app.get("/things/:idThing", getThing);

app.delete("/things/:idThing", deleteThing);

app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

export default app;
