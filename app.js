import express from "express";
import morgan from "morgan";

import { responsesRoutes } from "./routes/responsesRoutes.js";
import { errorsRoutes } from "./routes/errorsRoutes.js";

export const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/responses", responsesRoutes);
app.use("/errors", errorsRoutes);
