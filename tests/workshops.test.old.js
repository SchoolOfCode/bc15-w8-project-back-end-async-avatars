// Import Vitest for testing
import { test, expect, beforeEach } from "vitest";
// Import the 'resetDatabase' function to reset the database
import { resetDatabase } from "../db/scripts/reset-database.js";

// Import the Express app from app.js
import app from "../app.js";

// Import the function from Supertest (calling it 'request' as in the documentation)
import supertest from "supertest";

// beforeEach(async () => {
//   await resetDatabase();
// });


test("GET /workshops all workshops works", async () => {
  //      use Supertest to send a GET request to the `/workshops` endpoint
  //      wait for the response
  const response = await supertest(app).get("/workshops");
  //    ASSERT:
  //      assert that the response body is an object
  console.log(response);
//   expect(typeof response.body).toBe("object");
//   //      assert that response body.success is true
//   expect(response.body.success).toBe(true);
//   //      assert that response body.payload is an array
//   console.log(response.body.payload);
//   expect(Array.isArray(response.body.payload)).toBe(true);
//   //      loop over the payload array. for each user object in the payload array:
//   //          assert that user object.id is a number
//   //          assert that user object.username is a string
//   for (let i = 0; i < response.body.payload.length; i++) {
//     expect(typeof response.body.payload[i].id).toBe("number");
//     expect(typeof response.body.payload[i].task).toBe("string");
//     expect(isISO8601Date(response.body.payload[i].completion_date)).toBe(true);
//   }
//   //      assert that the response status code is 200
//   expect(response.statusCode).toBe(200);
//   //      assert that there's a Content-Type response header which contains `application/json`
//   expect(response.header["content-type"]).toMatch(/application\/json/);
});










