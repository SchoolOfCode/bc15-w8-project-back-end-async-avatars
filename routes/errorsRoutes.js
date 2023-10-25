import express from "express";

import * as errorsController from "../controllers/errorsController.js";
import * as errorsResponsesController from "../controllers/errorsResponsesController.js";

export const errorsRoutes = express.Router();

errorsRoutes.get("/", errorsController.getErrors);

errorsRoutes.get("/responses", errorsResponsesController.getErrorsResponses);

errorsRoutes.get("/:id/responses", errorsResponsesController.getErrorResponsesById);

errorsRoutes.get("/:id", errorsController.getErrorById);

errorsRoutes.post("/", errorsController.createError);

errorsRoutes.patch("/:id", errorsController.updateErrorById);

errorsRoutes.delete("/:id", errorsController.deleteErrorById);
