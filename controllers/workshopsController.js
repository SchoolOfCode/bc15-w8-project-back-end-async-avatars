// Importing the 'workshopsModel' module, which contains functions related to workshops data
import * as workshopsModel from "../models/workshopsModel.js";

// Controller function to get all workshops
export async function getWorkshops(req, res) {
  // Calling the 'getWorkshops' function from the 'workshopsModel' module to fetch all workshops
  const workshops = await workshopsModel.getWorkshops();
  // Sending a JSON response with a success status and the fetched workshops data
  res.status(200).json({ status: "success", data: workshops });
}

// Controller function to get a workshop by its ID
export async function getWorkshopById(req, res) {
  // Extracting the workshop ID from the request parameters
  const id = req.params.id;
  // Calling the 'getWorkshopById' function from the 'workshopsModel' module with the specified ID
  const response = await workshopsModel.getWorkshopById(id);

  // Checking if the response is not found (assuming 404 status)
  if (!response) {
    // Sending a JSON response with a failure status and a message indicating that the response is not found
    return res
      .status(404)
      .json({ status: "fail", data: { msg: "Response not found" } });
  }

  // Sending a JSON response with a success status and the fetched workshop data
  res.status(200).json({ status: "success", data: response });
}

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
