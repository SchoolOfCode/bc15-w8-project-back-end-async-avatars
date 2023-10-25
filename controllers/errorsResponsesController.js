import * as errorsResponsesModel from "../models/errorsResponsesModel.js";

export async function getErrorsResponses(req, res) {
  const errors = await errorsResponsesModel.getErrorsResponses();
  res.status(200).json({ status: "success", data: errors });
}

export async function getErrorResponsesById(req, res) {
  const id = req.params.id;
  const error = await errorsResponsesModel.getErrorResponsesById(id);
  // Assume 404 status if the error is not found
  if (!error) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Error/Responses not found" } });
  }
  res.status(200).json({ status: "success", data: error });
}

