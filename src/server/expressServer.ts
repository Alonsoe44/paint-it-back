import express, { Request, Response } from "express";
require("dotenv").config();
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Hola");
});

export default app;
