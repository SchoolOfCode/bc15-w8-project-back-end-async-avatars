import express from "express";

import * as workshopsController from "../controllers/workshopsController.js";
import * as workshopsBookmarksController from "../controllers/workshopsBookmarksController.js";

export const workshopsRoutes = express.Router();

workshopsRoutes.get("/", workshopsController.getWorkshops);

workshopsRoutes.get("/:id/bookmarks", workshopsBookmarksController.getWorkshopsBookmarksById);

workshopsRoutes.get("/:id", workshopsController.getWorkshopById);

// workshopsRoutes.post("/", workshopsController.createResponse);

// workshopsRoutes.patch("/:id", workshopsController.updateResponseById);

// workshopsRoutes.delete("/:id", workshopsController.deleteResponseById);
