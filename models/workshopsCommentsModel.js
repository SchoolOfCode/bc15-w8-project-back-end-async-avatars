// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getWorkshopsCommentsById(id) {
  // Query the database and return the error with a matching id or null

  // Define the SQL query to fetch the error with the specified id from the 'errors' table with matching responses
  const queryText = `SELECT * FROM workshops, comments 
                     WHERE workshops.id = comments.workshop_id 
                     AND workshops.id = $1
                     ORDER BY added_date`;

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  // If a error with the specified id exists, it will be the first element in the rows array
  // If no error exists with the specified id, the rows array will be empty
  return result.rows || null;
}

// Export an asynchronous function named createComment that handles comment creation
export async function createComment(res, id, data) {
  try {
    // Extract the request body data and assign it to the 'data' variable
    // const data = req.body;
    // console.log("data",data)

    // Define the SQL query for inserting a new comment into the 'comments' table
    const queryText = `
      INSERT INTO comments (comment, workshop_id)
      VALUES ($1, $2)
      RETURNING *;
    `;

    // Use the pool object to send the query to the database
    // Parameterize the query to prevent SQL injection
    const result = await pool.query(queryText, [
      data.comment,
      id,
    ]);

    // Send an HTTP response with a status code 201 (indicating successful resource creation)
    // and a JSON response containing a success status and the newly created comment
    res.status(201).json({ status: "success", data: result.rows[0] });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ status: "error", message: "Failed to create comment" });
  }
}