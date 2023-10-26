import express from "express";

import * as workshopsController from "../controllers/workshopsController.js";
import * as workshopsBookmarksController from "../controllers/workshopsBookmarksController.js";
import * as workshopsCommentsController from "../controllers/workshopsCommentsController.js";


export const workshopsRoutes = express.Router();

workshopsRoutes.get("/", workshopsController.getWorkshops);

workshopsRoutes.get("/:id/bookmarks", workshopsBookmarksController.getWorkshopsBookmarksById);

workshopsRoutes.get("/:id/comments", workshopsCommentsController.getWorkshopsCommentsById);

workshopsRoutes.get("/:id", workshopsController.getWorkshopById);


workshopsRoutes.post("/:id/comments", workshopsCommentsController.createComment);

// workshopsRoutes.patch("/:id", workshopsController.updateResponseById);

// workshopsRoutes.delete("/:id", workshopsController.deleteResponseById);
