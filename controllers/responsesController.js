import * as responsesModel from "../models/responsesModel.js";

export async function getResponses(req, res) {
  const responses = await responsesModel.getResponses();
  res.status(200).json({ status: "success", data: responses });
}

export async function getResponseById(req, res) {
  const id = req.params.id;
  const response = await responsesModel.getResponseById(id);
  // Assume 404 status if the response is not found
  if (!response) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Response not found" } });
  }
  res.status(200).json({ status: "success", data: response });
}

export async function createResponse(req, res) {
  const data = req.body;
  const response = await responsesModel.createResponse(data);
  res.status(201).json({ status: "success", data: response });
}

export async function updateResponseById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const response = await responsesModel.updateResponseById(id, data);
  // Assume 404 status if the response is not found
  if (!response) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Response not found" } });
  }

  res.status(200).json({ status: "success", data: response });
}

export async function deleteResponseById(req, res) {
  const id = req.params.id;
  const response = await responsesModel.deleteResponseById(id);
  // Assume 404 status if the response is not found
  if (!response) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Response not found" } });
  }
  res.status(200).json({ status: "success", data: response });
}
