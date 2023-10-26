import express from "express";
import morgan from "morgan";
import cors from "cors";

import { workshopsRoutes } from "./routes/workshopsRoutes.js";
// import { errorsRoutes } from "./routes/errorsRoutes.js";

export const app = express();

app.use(
    cors({
      origin: "http://127.0.0.1:5500",
      methods: ["GET", "POST", "DELETE", "PATCH"],
    })
  );

app.use(morgan("dev"));
app.use(express.json());

app.use("/workshops", workshopsRoutes);
// app.use("/errors", errorsRoutes);
