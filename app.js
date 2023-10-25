import express from "express";
import morgan from "morgan";

import { workshopsRoutes } from "./routes/workshopsRoutes.js";
// import { errorsRoutes } from "./routes/errorsRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/workshops", workshopsRoutes);
// app.use("/errors", errorsRoutes);
