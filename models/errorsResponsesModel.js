// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getErrorsResponses() {
  // Query the database and return all errors

  // Define the SQL query to fetch all errors from the 'errors' table with matching responses
  const queryText =
    "SELECT * FROM errors, responses WHERE errors.id = responses.error_id";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getErrorResponsesById(id) {
  // Query the database and return the error with a matching id or null

  // Define the SQL query to fetch the error with the specified id from the 'errors' table with matching responses
  const queryText =
    "SELECT * FROM errors, responses WHERE errors.id = responses.error_id AND errors.id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  // If a error with the specified id exists, it will be the first element in the rows array
  // If no error exists with the specified id, the rows array will be empty
  return result.rows[0] || null;
}