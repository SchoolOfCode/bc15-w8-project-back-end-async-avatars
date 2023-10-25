import * as errorsModel from "../models/errorsModel.js";

export async function getErrors(req, res) {
  const errors = await errorsModel.getErrors();
  res.status(200).json({ status: "success", data: errors });
}

export async function getErrorById(req, res) {
  const id = req.params.id;
  const error = await errorsModel.getErrorById(id);
  // Assume 404 status if the error is not found
  if (!error) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Error not found" } });
  }
  res.status(200).json({ status: "success", data: error });
}

export async function createError(req, res) {
  const data = req.body;
  const error = await errorsModel.createError(data);
  res.status(201).json({ status: "success", data: error });
}

export async function updateErrorById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const error = await errorsModel.updateErrorById(id, data);
  // Assume 404 status if the error is not found
  if (!error) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Error not found" } });
  }
  res.status(200).json({ status: "success", data: error });
}

export async function deleteErrorById(req, res) {
  const id = req.params.id;
  const error = await errorsModel.deleteErrorById(id);
  // Assume 404 status if the error is not found
  if (!error) {
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Error not found" } });
  }
  res.status(200).json({ status: "success", data: error });
}
