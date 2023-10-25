import express from "express";

import * as workshopsController from "../controllers/workshopsController.js";

export const workshopsRoutes = express.Router();

workshopsRoutes.get("/", workshopsController.getWorkshops);

// workshopsRoutes.get("/:id", workshopsController.getResponseById);

// workshopsRoutes.post("/", workshopsController.createResponse);

// workshopsRoutes.patch("/:id", workshopsController.updateResponseById);

// workshopsRoutes.delete("/:id", workshopsController.deleteResponseById);
