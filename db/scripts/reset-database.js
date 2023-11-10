// Import the database pool and resetDatabase function from the index.js and helpers.js files
import { pool } from "../index.js";
import { resetDatabase } from "../helpers.js";

try {
  // Attempt to reset the database using the resetDatabase function
  await resetDatabase();
  // Log a success message if the database reset is successful
  console.log("Database reset successful");
} catch (error) {
  // Log an error message if the database reset fails and include the error details
  console.error("Database reset failed: ", error);
}

// Note: The following line is outside the try-catch block and may not execute due to the synchronous nature of JavaScript
await resetDatabase();
