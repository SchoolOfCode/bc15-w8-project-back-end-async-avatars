// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

export async function getErrors() {
  // Query the database and return all errors

  // Define the SQL query to fetch all errors from the 'errors' table
  const queryText = "SELECT * FROM errors";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  return result.rows;
}

export async function getErrorById(id) {
  // Query the database and return the error with a matching id or null

  // Define the SQL query to fetch the error with the specified id from the 'errors' table
  const queryText = "SELECT * FROM errors WHERE id = $1";

  // Use the pool object to send the query to the database
  // passing the id as a parameter to prevent SQL injection
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the retrieved records
  return result.rows[0] || null;
}

export async function createError(error) {
  // Query the database to create an error and return the newly created error

  // Define the SQL query for inserting a new error into the 'errors' table
  const queryText = `
      INSERT INTO errors (description, workshop, error_code, error_message)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    error.description,
    error.workshop,
    error.error_code,
    error.error_message,
  ]);

  // The rows property of the result object contains the inserted record
  return result.rows[0];
}

export async function updateErrorById(id, updates) {
  // Define the SQL query for updating the specified error in the 'errors' table
  const queryText = `
      UPDATE errors
      SET description = COALESCE($1, description), workshop = COALESCE($2, workshop),
          error_code = COALESCE($1, error_code), error_message = COALESCE($2, error_message)
      WHERE id = $5
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [
    updates.description,
    updates.workshop,
    updates.error_code,
    updates.error_message,
    id,
  ]);

  // The rows property of the result object contains the updated record
  return result.rows[0] || null;
}

export async function deleteErrorById(id) {
  // Query the database to delete an error and return the deleted error or null

  // Define the SQL query for deleting the specified error from the 'errors' table
  const queryText = `
      DELETE FROM errors
      WHERE id = $1
      RETURNING *;
    `;

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText, [id]);

  // The rows property of the result object contains the deleted record
  return result.rows[0] || null;
}

// export async function getErrorsResponses() {
//   // Query the database and return all errors

//   // Define the SQL query to fetch all errors from the 'errors' table with matching responses
//   const queryText = "SELECT * FROM errors, responses WHERE errors.id = responses.error_id";

//   // Use the pool object to send the query to the database
//   const result = await pool.query(queryText);

//   // The rows property of the result object contains the retrieved records
//   return result.rows;
// }

