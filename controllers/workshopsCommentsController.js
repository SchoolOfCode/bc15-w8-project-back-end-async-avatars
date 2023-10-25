import * as workshopsCommentsModel from "../models/workshopsCommentsModel.js";

// export async function getWorkshopsComments(req, res) {
//   const errors = await workshopsCommentsModel.getWorkshopsComments();
//   res.status(200).json({ status: "success", data: errors });
// }

export async function getWorkshopsCommentsById(req, res) {
  const id = req.params.id;
  console.log("module working", id)
  const data = await workshopsCommentsModel.getWorkshopsCommentsById(id);
  console.log(id, data)
  // Assume 404 status if the error is not found
  if (!data) {
    return res.status(404).json({ status: "fail", data: { msg: "Workshop/Comments not found" } });
  }
  res.status(200).json({ status: "success", data: data });
}