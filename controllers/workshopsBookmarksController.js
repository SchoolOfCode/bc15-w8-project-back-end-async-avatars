import * as workshopsBookmarksModel from "../models/workshopsBookmarksModel.js";

// export async function getWorkshopsBookmarks(req, res) {
//   const errors = await workshopsBookmarksModel.getWorkshopsBookmarks();
//   res.status(200).json({ status: "success", data: errors });
// }

export async function getWorkshopsBookmarksById(req, res) {
  const id = req.params.id;
  const data = await workshopsBookmarksModel.getWorkshopsBookmarksById(id);
  // Assume 404 status if the error is not found
  if (!data) {
    return res.status(404).json({ status: "fail", data: { msg: "Workshop/Bookmarks not found" } });
  }
  res.status(200).json({ status: "success", data: data });
}
