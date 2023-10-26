// Import Vitest for testing
import { test, expect } from "vitest";

// Import the Express app from app.js
import { app } from "../app.js";

// Import the function from Supertest (calling it 'request' as in the documentation)
import request from "supertest";

// Import the 'resetDatabase' function to reset the database
import { resetDatabase } from "../db/scripts/reset-database.js";

// Test skeleton to verify setup
test("should pass - skeleton", function () {
  // Your test code here
});

// Test for retrieving all workshops via GET request
test("GET workshops", async function () {
  // Reset the database tables using 'resetAllTables' with seed data
  await resetDatabase();

  // Send a GET request to the /workshops endpoint
  const response = await request(app).get("/workshops");


  // Assertions:
  // - Check if the response indicates success
  expect(response.body.success).toBe(true);

  // - Verify that the response contains an array of todo objects
  expect(Array.isArray(response.body.payload)).toBe(true);

  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  // - Confirm that the response status code is 200
  expect(response.status).toBe(200);
});