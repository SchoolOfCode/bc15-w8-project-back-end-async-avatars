import * as workshopsCommentsModel from "../models/workshopsCommentsModel.js";

// export async function getWorkshopsComments(req, res) {
//   const errors = await workshopsCommentsModel.getWorkshopsComments();
//   res.status(200).json({ status: "success", data: errors });
// }

export async function getWorkshopsCommentsById(req, res) {
  const id = req.params.id;
  const data = await workshopsCommentsModel.getWorkshopsCommentsById(id);
  // Assume 404 status if the error is not found
  if (!data) {
    return res.status(404).json({ status: "fail", data: { msg: "Workshop/Comments not found" } });
  }
  res.status(200).json({ status: "success", data: data });
}

// Export an asynchronous function named createComment that handles comment creation
export async function createComment(req, res) {
  const id = req.params.id;
  // Extract the request body data and assign it to the 'data' variable
  const data = req.body;

  // Call the 'createComment' function from the 'workshopsModel' with the extracted 'data', and await its result
  const response = await workshopsCommentsModel.createComment(res, id, data);

  // Send an HTTP response with a status code 201 (indicating successful resource creation)
  // and a JSON response containing a success status and the 'response' data
  // res.status(201).json({ status: "success", data: response });
}
