import { type Request, type Response } from "express";
import things from "../../../data/things.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThing = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thingPosition = things.findIndex((thing) => thing.id === idThing);

  if (thingPosition === -1) {
    return res.status(404).json({ message: "No id found" });
  }

  const result = things.filter((thing) => thing.id === idThing);

  res.status(200).json(result);
};
