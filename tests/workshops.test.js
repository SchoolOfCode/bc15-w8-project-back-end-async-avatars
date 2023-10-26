// Import Vitest for testing
import { test, expect, beforeEach } from "vitest";

// Import the Express app from app.js
import { app } from "../app.js";

// Import the function from Supertest (calling it 'request' as in the documentation)
import request from "supertest";

// function to check format of ISO data/time + timezone variable
function isISO8601Date(dateString) {
  const iso8601Pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
  return iso8601Pattern.test(dateString);
}

// Import the 'resetDatabase' function to reset the database
import { resetDatabase } from "../db/helpers.js";

beforeEach(async () => {
  await resetDatabase();
});

// Test for retrieving all workshops via GET request
test("GET /workshops - get all workshops", async function () {
  // Send a GET request to the /workshops endpoint
  const response = await request(app).get("/workshops");

  // Assertions:
  // - Check if the response indicates success
  expect(response.body.status).toBe("success");

  // - Verify that the response contains an array of workshop objects
  expect(Array.isArray(response.body.data)).toBe(true);

  // - Verify that each workshop object in the array contains a valid workshop object
  response.body.data.forEach((workshop) => {
    // verify the id is numeric
    expect(typeof workshop.id).toBe("number");
    // verify the workshop name is a string
    expect(typeof workshop.week_name).toBe("string");
    // verify the date is a valid date format
    expect(isISO8601Date(workshop.date)).toBe(true);
  });

  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  // - Confirm that the response status code is 200
  expect(response.status).toBe(200);
});

// Test for retrieving workshop by id via GET request
test("GET workshops/1 - get workshop by id", async function () {
  // Send a GET request to the /workshops endpoint
  const response = await request(app).get("/workshops/1");

  // Assertions:
  // - Check if the response indicates success
  expect(response.body.status).toBe("success");

  // - Verify that the response body contains the expected workshop object
  const workshopObject = response.body.data;
  expect(typeof workshopObject).toBe("object");

  // verify the id is numeric
  expect(workshopObject.id).toBe(1);
  // verify the workshop name is as expected
  expect(workshopObject.name).toBe("Workshop 1 - Romeo and Juligit");
  // verify the workshop description is as expected
  expect(workshopObject.description).toBe(`Before you know it, the add/commit/push/pull rhythm will become second nature, but to get there, we need to practice.`);
  // verify the date is as expected
  expect(workshopObject.date).toBe("2023-09-06T23:00:00.000Z");
  // verify the week_id is as expected
  expect(workshopObject.week_id).toBe(1);

  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  // - Confirm that the response status code is 200
  expect(response.status).toBe(200);
});

// Test for retrieving bookmarks for workshop by id via GET request
test("GET workshops/1/bookmarks - get all bookmarks for workshop by id", async function () {
  // Send a GET request to the /workshops/bookmarks endpoint
  const response = await request(app).get("/workshops/1/bookmarks");

  // Assertions:
  // - Check if the response indicates success
  expect(response.body.status).toBe("success");

  // - Verify that the response contains an array of bookmark objects
  expect(Array.isArray(response.body.data)).toBe(true);

  // - Verify that each bookmark object in the array contains a valid bookmark object
  response.body.data.forEach((bookmark) => {
    // verify the id is numeric
    expect(typeof bookmark.id).toBe("number");
    // verify the bookmark name is a string
    expect(typeof bookmark.name).toBe("string");
    // verify the bookmark description is a string
    expect(typeof bookmark.description).toBe("string");
    // verify the date is a valid date format
    expect(isISO8601Date(bookmark.date)).toBe(true);
    // verify the week_id is numeric
    expect(typeof bookmark.week_id).toBe("number");
    // verify the bookmark url is a string
    expect(typeof bookmark.url).toBe("string");
    // verify the bookmark helpful_links is a boolean
    expect(typeof bookmark.helpful_links).toBe("boolean");
    // verify the workshop_id is numeric
    expect(typeof bookmark.workshop_id).toBe("number");
  });

  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  // - Confirm that the response status code is 200
  expect(response.status).toBe(200);
});

// Test for retrieving comments for workshop by id via GET request
test("GET workshops/1/comments - get all comments for workshop by id", async function () {
  // Send a GET request to the /workshops/bookmarks endpoint
  const response = await request(app).get("/workshops/1/comments");

  // Assertions:
  // - Check if the response indicates success
  expect(response.body.status).toBe("success");

  // - Verify that the response contains an array of comment objects
  expect(Array.isArray(response.body.data)).toBe(true);

  // - Verify that each comment object in the array contains a valid comment object
  response.body.data.forEach((comment) => {
    // verify the id is numeric
    expect(typeof comment.id).toBe("number");
    // verify the comment name is a string
    expect(typeof comment.name).toBe("string");
    // verify the comment description is a string
    expect(typeof comment.description).toBe("string");
    // verify the date is a valid date format
    expect(isISO8601Date(comment.date)).toBe(true);
    // verify the week_id is numeric
    expect(typeof comment.week_id).toBe("number");
    // verify the comment comment is a string
    expect(typeof comment.comment).toBe("string");
    // verify the added date is a valid date format
    expect(isISO8601Date(comment.added_date)).toBe(true);
    // verify the workshop_id is numeric
    expect(typeof comment.workshop_id).toBe("number");
  });

  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  // - Confirm that the response status code is 200
  expect(response.status).toBe(200);
});


// Test for adding comment for workshop by id via GET request
test("POST workshops/1/comments - add comment for workshop by id", async function () {
  // Send a POST request to the /workshops/comments endpoint
  const response = await request(app)
    .post("/workshops/1/comments")
    .send({
      comment: "This is a test comment",
    })
    .set("Accept", "application/json");

  console.log("response.body: ", response.body);

  // - Check if the response indicates success
  expect(response.body.status).toBe("success");

  //check that the response code is 201
  expect(response.statusCode).toBe(201);
  // - Ensure that the Content-Type header is set to application/json
  expect(response.headers["content-type"]).toMatch("application/json");

  const commentObject = response.body.data;
  // verify the id is numeric
  expect(typeof commentObject.id).toBe("number");
  // verify the comment text is as expected
  expect(commentObject.comment).toBe("This is a test comment");
  // verify the date is as expected
  expect(isISO8601Date(commentObject.added_date)).toBe(true);
  // verify the workshop_id is as expected
  expect(commentObject.workshop_id).toBe(1);
});