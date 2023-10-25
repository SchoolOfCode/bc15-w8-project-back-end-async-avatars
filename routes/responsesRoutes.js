import express from "express";

import * as responsesController from "../controllers/responsesController.js";

export const responsesRoutes = express.Router();

responsesRoutes.get("/", responsesController.getResponses);

responsesRoutes.get("/:id", responsesController.getResponseById);

responsesRoutes.post("/", responsesController.createResponse);

responsesRoutes.patch("/:id", responsesController.updateResponseById);

responsesRoutes.delete("/:id", responsesController.deleteResponseById);
