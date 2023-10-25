import * as workshopsModel from "../models/workshopsModel.js";

export async function getWorkshops(req, res) {
  const workshops = await workshopsModel.getWorkshops();
  res.status(200).json({ status: "success", data: workshops });
}

// export async function getResponseById(req, res) {
//   const id = req.params.id;
//   const response = await workshopsModel.getResponseById(id);
//   // Assume 404 status if the response is not found
//   if (!response) {
//     return res
//       .status(404)
//       .json({ status: "fail", data: { msg: "Response not found" } });
//   }
//   res.status(200).json({ status: "success", data: response });
// }

// export async function createResponse(req, res) {
//   const data = req.body;
//   const response = await workshopsModel.createResponse(data);
//   res.status(201).json({ status: "success", data: response });
// }

// export async function updateResponseById(req, res) {
//   const id = req.params.id;
//   const data = req.body;
//   const response = await workshopsModel.updateResponseById(id, data);
//   // Assume 404 status if the response is not found
//   if (!response) {
//     return res
//       .status(404)
//       .json({ status: "fail", data: { msg: "Response not found" } });
//   }

//   res.status(200).json({ status: "success", data: response });
// }

// export async function deleteResponseById(req, res) {
//   const id = req.params.id;
//   const response = await workshopsModel.deleteResponseById(id);
//   // Assume 404 status if the response is not found
//   if (!response) {
//     return res
//       .status(404)
//       .json({ status: "fail", data: { msg: "Response not found" } });
//   }
//   res.status(200).json({ status: "success", data: response });
// }
