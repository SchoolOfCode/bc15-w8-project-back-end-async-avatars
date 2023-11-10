// Import the pg (node-postgres) library
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

// Retrieve the database connection string from environment variables
const connectionString = process.env.DB_CONNECTION_STRING; 

console.log("DB_CONNECTION_STRING:", process.env.DB_CONNECTION_STRING);
console.log("Process Environment Variables:", process.env);


// Check if the connection string is not defined, and if so, throw an error
if (!connectionString) {
  throw new Error(
    "No DB_CONNECTION_STRING defined. Did you load in your env variables?"
  );
}

// Export a new instance of pg.Pool, which will be used to interact with the PostgreSQL database
export const pool = new pg.Pool({
  // Pass the connection string to the pool, so it knows how to connect to your database
  connectionString,
});
