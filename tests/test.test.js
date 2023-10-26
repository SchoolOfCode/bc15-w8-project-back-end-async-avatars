import { test, expect, beforeEach, afterAll } from "vitest";
import supertest from "supertest";
//from other files
import { app } from "../app.js";
import { pool } from "../db/index.js";
import { resetDatabase } from "../db/scripts/reset-database.js";
q
// beforeEach(async () => {
//   await resetDatabase();
// });

// afterAll(async () => {
//   await resetAllTables(initialData);
//   try {
//     await pool.end();
//     console.log("Pool closed");
//   } catch (error) {
//     console.error("Error closing pool:", error);
//   }
// });

test("GET /workshops all workshops works", async () => {
  //      use Supertest to send a GET request to the `/workshops` endpoint
  //      wait for the response
  const response = await supertest(app).get("/workshops");
  //    ASSERT:
  //      assert that the response body is an object
//   expect(typeof response.body).toBe("object");
//   //      assert that response body.success is true
//   expect(response.body.success).toBe(true);
//   //      assert that response body.payload is an array
//   console.log(response.body.payload);
  console.log(response);q
  expect(Array.isArray(response.body.data)).toBe(true);
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

// test("POST /api/todos", async () => {
//   //send a request via superset
//   //receive a response
//   const response = await supertest(app)
//     .post("/api/todos")
//     .send({
//       task: "Brew some tea",
//       completionDate: "2023-10-15T00:00:00.000Z",
//     })
//     .set("Accept", "application/json");
//   console.log(response.body);
//   //check that the response code is 200
//   expect(response.statusCode).toBe(201);
//   //assert that there's a Content-Type response header which contains "application/json"
//   expect(response.header["content-type"]).toMatch(/application\/json/);
//   //retrieve new todo
//   // const newTodo = await response.body.payload.id;
//   // const secondResponse = await supertest(app).get(`/api/todos/${newTodo}`);
//   expect(response.body.success).toBe(true);
//   expect(response.body.payload.task).toBe("Brew some tea");
//   expect(response.body.payload.completion_date).toBe("2023-10-15T00:00:00.000Z");
// });

// test("DELETE /api/todos/2", async () => {
//   //send a request via superset
//   //receive a response
//   const response = await supertest(app).delete("/api/todos/2");
//   console.log(response.body);
//   //check that the response code is 200
//   expect(response.statusCode).toBe(200);
//   //assert that there's a Content-Type response header which contains "application/json"
//   expect(response.header["content-type"]).toMatch(/application\/json/);
//   //   const secondResponse = await supertest(app).get(`/api/users/2`);
//   //   expect(secondResponse.statusCode).toBe(404);
//   expect(response.body.success).toBe(true);
//   expect(response.body.payload.task).toBe("Feed the computer");
//   expect(response.body.payload.completion_date).toBe("2015-01-10T00:00:00.000Z");
// });

// test("POST /api/todos with invalid body", async () => {
//   //send a request via superset
//   //receive a response
//   const response = await supertest(app).post("/api/todos").send({}).set("Accept", "application/json");
//   console.log(response.body);
//   //check that the response code is 200
//   expect(response.statusCode).toBe(400);
//   //assert that there's a Content-Type response header which contains "application/json"
//   expect(response.header["content-type"]).toMatch(/application\/json/);

//   expect(response.body.success).toBe(false);
//   expect(response.body.error).toBe("Please provide a 'task' and 'completionDate'");
// });

// test("DELETE /api/todos/123", async () => {
//   //send a request via superset
//   //receive a response
//   const response = await supertest(app).delete("/api/todos/123");
//   console.log(response.body);
//   //check that the response code is 200
//   expect(response.statusCode).toBe(404);
//   //assert that there's a Content-Type response header which contains "application/json"
//   expect(response.header["content-type"]).toMatch(/application\/json/);

//   expect(response.body.success).toBe(false);
//   expect(response.body.error).toBe("No todo with id 123 found");
// });
