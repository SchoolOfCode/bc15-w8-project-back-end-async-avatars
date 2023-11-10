// Import the database pool from the index.js file
import { pool } from "./index.js";

// Function to reset the database
export async function resetDatabase() {
  // Drop existing tables if they exist
  await pool.query(`
      DROP TABLE IF EXISTS workshops CASCADE;
      DROP TABLE IF EXISTS weeks CASCADE;
      DROP TABLE IF EXISTS bookmarks CASCADE;
      DROP TABLE IF EXISTS comments CASCADE;
    `);

  // Create the weeks table
  await pool.query(`
        CREATE TABLE weeks (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          description TEXT NOT NULL
        );
    `);

  // Create the workshops table with foreign key to weeks table
  await pool.query(`
      CREATE TABLE workshops (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        date DATE,
        week_id INT REFERENCES weeks(id) ON DELETE CASCADE NOT NULL
      );
    `);

  // Create the bookmarks table with a foreign key to the workshops table
  await pool.query(`
        CREATE TABLE bookmarks (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          description TEXT NOT NULL,
          url TEXT NOT NULL,
          helpful_links BOOLEAN,
          workshop_id INT REFERENCES workshops(id) ON DELETE CASCADE NOT NULL
        );
    `);

  // Create the comments table with a foreign key to the workshops table
  await pool.query(`
        CREATE TABLE comments (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          comment TEXT NOT NULL,
          added_date DATE NOT NULL DEFAULT CURRENT_DATE,
          workshop_id INT REFERENCES workshops(id) ON DELETE CASCADE NOT NULL
        );
    `);

  // Seed the weeks table
  await pool.query(`
      INSERT INTO weeks (description)
      VALUES
      ('Week 1 - Computational Thinking'),
      ('Week 2 - JS Foundations'),
      ('Week 3 - Front-End Foundations'),
      ('Week 4 - Back-End'),
      ('Week 5 - Databases'),
      ('Week 6 - Testing'),
      ('Week 7 - Modern Software Teams and Projects'),
      ('Week 8 - Project Week'),
      ('Week 9 - Retrospectives'),
      ('Week 10 - Intro to React'),
      ('Week 11 - Advancing React'),
      ('Week 12 - Languages and Architecture');
    `);

  // Seed the workshops table
  await pool.query(`
        INSERT INTO workshops (name, description, date, week_id)
        VALUES
        // ... (Workshop entries are continued for brevity)
    `);

  // Seed the bookmarks table
  await pool.query(`
        INSERT INTO bookmarks (description, url, helpful_links, workshop_id)
        VALUES
        // ... (Bookmark entries are continued for brevity)
    `);

  // Seed the comments table
  await pool.query(`
      INSERT INTO comments (comment,added_date,workshop_id)
      VALUES
      // ... (Comment entries are continued for brevity)
    `);
}

// import { pool } from "./index.js";

// export async function resetDatabase() {
//   // Drop existing tables if they exist
//   await pool.query(`
//       DROP TABLE IF EXISTS workshops CASCADE;
//       DROP TABLE IF EXISTS weeks CASCADE;
//       DROP TABLE IF EXISTS bookmarks CASCADE;
//       DROP TABLE IF EXISTS comments CASCADE;
//     `);

//   // Create the weeks table
//   await pool.query(`
//         CREATE TABLE weeks (
//           id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//           description TEXT NOT NULL
//         );
//     `);

//   // Create the workshops table with foreign key to weeks table
//   await pool.query(`
//       CREATE TABLE workshops (
//         id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//         name TEXT NOT NULL,
//         description TEXT,
//         date DATE,
//         week_id INT REFERENCES weeks(id) ON DELETE CASCADE NOT NULL
//       );
//     `);

//   // Create the bookmarks table with a foreign key to the workshops table
//   await pool.query(`
//         CREATE TABLE bookmarks (
//           id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//           description TEXT NOT NULL,
//           url TEXT NOT NULL,
//           helpful_links BOOLEAN,
//           workshop_id INT REFERENCES workshops(id) ON DELETE CASCADE NOT NULL
//         );
//     `);

//   // Create the comments table with a foreign key to the workshops table
//   await pool.query(`
//         CREATE TABLE comments (
//           id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//           comment TEXT NOT NULL,
//           added_date DATE NOT NULL DEFAULT CURRENT_DATE,
//           workshop_id INT REFERENCES workshops(id) ON DELETE CASCADE NOT NULL
//         );
//     `);

//   // Seed the weeks table
//   await pool.query(`
//       INSERT INTO weeks (description)
//       VALUES
//       ('Week 1 - Computational Thinking'),
//       ('Week 2 - JS Foundations'),
//       ('Week 3 - Front-End Foundations'),
//       ('Week 4 - Back-End'),
//       ('Week 5 - Databases'),
//       ('Week 6 - Testing'),
//       ('Week 7 - Modern Software Teams and Projects'),
//       ('Week 8 - Project Week'),
//       ('Week 9 - Retrospectives'),
//       ('Week 10 - Intro to React'),
//       ('Week 11 - Advancing React'),
//       ('Week 12 - Languages and Architecture');
//     `);

//   // Seed the workshops table
//   await pool.query(`
//         INSERT INTO workshops (name, description, date, week_id)
//         VALUES
//         ('Workshop 1 - Romeo and Juligit', 'Before you know it, the add/commit/push/pull rhythm will become second nature, but to get there, we need to practice.', '2023-09-07', 1),
//         ('Hackathon - Escape Room on Scratch', 'You will be building an escape room using Scratch', '2023-09-08', 1),
//         ('Workshop 1 - Intro to Javascript', 'This workshop will teach core JS concepts to get you started. We''ll cover the key building blocks before applying JS to dynamic web apps. Get ready to level up your JS skills!', '2023-09-12', 2),
//         ('Workshop 2 - Loops', 'This workshop will explore what loops are, why we use them and how we write them.', '2023-09-12', 2),
//         ('Workshop 3 - Functions and Scope', 'We''ve reached a point where we want to be able to reuse what we''re creating so that we don''t have to write the same bits of code over and over again or our code is becoming a bit more complex and longer, and so we can simplify and hide details - that''s where functions come in', '2023-09-13', 2),
//         ('Workshop 4 - Arrays', 'Arrays let you store multiple values (of any type) in a flexible, ordered list.', '2023-09-13', 2),
//         ('Workshop 5 - Array Methods and Callbacks', 'Array methods are handy tools in JavaScript for working with array data. These methods allow you to loop through an array and perform an action on each element.', '2023-09-14', 2),
//         ('Workshop 6 - Objects', 'Objects store collections of keyed values, useful for representing real-world entities with many characteristics.', '2023-09-14', 2),
//         ('Hackathon - Rock, Paper, Scissors', 'Use what you''ve learned to build a Rock, Paper, Scissors game', '2023-09-15', 2),
//         ('Workshop 1 - Debugging', 'Debugging is the practice of investigating and fixing bugs.', '2023-09-18', 3),
//         ('Workshop 2 - Intro to the DOM', 'The DOM allows us to manipulate HTML and CSS using JavaScript.', '2023-09-19', 3),
//         ('Workshop 3 - DOM Manipulation', 'Ready to become a DOM master? This workshop will take your DOM skills to the next level through a series of challenges.', '2023-09-20', 3),
//         ('Workshop 4 - Intro to Fetch API', 'We will take a deep dive into the app''s limitations and discover ways to transform it, making it more dynamic and scalable.', '2023-09-21', 3),
//         ('Workshop 5 - Navigating Data', 'We''ve given you a big old piece of data in this workshop. Your challenge is to navigate it.', '2023-09-21', 3),
//         ('Hackathon - Weather App', 'Use what you''ve learned to build a weather app.', '2023-09-22', 3),
//         ('Workshop 1 - Clock Challenge', 'In this challenge, you will be using your newfound knowledge of asynchronous code to control time and make the hand of this clock tick.', '2023-09-25', 4),
//         ('Workshop 2 - Intro to Node.js', ' In this workshop, we''ll demystify key concepts, including Node.js installation and the creation, importing, and exporting of modules.', '2023-09-26', 4),
//         ('Workshop 3 - CRUD Functionality', 'In this workshop, we''ll construct a module with helper functions that handle these CRUD operations for an inspirational quotes application.', '2023-09-27', 4),
//         ('Workshop 4 - Building a REST API', 'Today, the task is to construct the REST API, which will serve as the backend for the app.', '2023-09-28', 4),
//         ('Hackathon - Building a REST API', 'Use your learnings from this week to build your own API', '2023-09-29', 4),
//         ('Workshop 1 - SQL Practice', 'Navigate to the ElephantSQL website and create a new Postgres database.', '2023-10-04', 5),
//         ('Workshop 2 - REST Express', 'The requirements have changed since yesterday. Now a single book can only have one author.', '2023-10-05', 5),
//         ('Hackathon - Build a REST API with Postgres', 'Build your own Postgres Database with as many tables and relationships as you like', '2023-10-06', 5),
//         ('Workshop 1 - Unit Testing', 'In this workshop, we''ll learn unit testing - testing small units of logic in isolation. We''ll use Vitest for easier test writing and running.', '2023-10-09', 6),
//         ('Workshop 2 - Test Driven Development', 'Test driven development means writing tests first, before writing code. The tests define what the code should do. Then you write code to pass the tests.', '2023-10-10', 6),
//         ('Workshop 3 - End-to-End Testing', 'In this workshop, we''ll learn end-to-end testing with Playwright. Playwright makes it easy to automate and test real browser interactions with the UI and functionality of web apps. We''ll use Playwright to write scripts that simulate user flows. This will test our app fully from end-to-end.', '2023-10-11', 6),
//         ('Workshop 4 - API Testing with Supertest', 'As the information served by an API becomes critical and other software comes to rely on it, developers need confidence that the API works as expected and doesn''t for example fail to respond or respond with missing or incorrect data.', '2023-10-12', 6),
//         ('Hackathon - Testathon', 'You''ll be writing a full test suite for an app that we have built', '2023-10-13', 6);
//     `);

//   // Seed the bookmarks table
//   await pool.query(`
//         INSERT INTO bookmarks (description, url, helpful_links, workshop_id)
//         VALUES
//         ('Github Repo', 'https://classroom.github.com/a/ElP3Fc9C', FALSE, 1),
//         ('Hackathon Repo', 'https://classroom.github.com/assignment-invitations/3fbdc8e4f8e580a676471e598d77ea92/status', FALSE, 2),
//         ('Scratch Link', 'https://scratch.mit.edu/', TRUE, 2),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/a07a0a01cd8851bcc1f7906537b2524e/status', FALSE, 3),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/0e8d8bb3bbb7669fc4bf6d290bb462b8/status', FALSE, 4),
//         ('For Loops', 'https://www.w3schools.com/js/js_loop_for.asp', TRUE, 4),
//         ('Github Repo', 'https://classroom.github.com/a/SsLRxarN', FALSE, 5),
//         ('Github Repo', 'https://classroom.github.com/a/HNOpMWtV', FALSE, 6),
//         ('Github Repo', 'https://classroom.github.com/a/21V5lQcj', FALSE, 7),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/9523fd5b295d78a31b1d01fa17f8c4f0/status', FALSE, 8),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/2f26c6116c3374969c3400971398de95/status', FALSE, 9),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/6cb82afecbe9a647e8abf0c9ab4fffc4/status', FALSE, 10),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/70b56cb13cccf23d643a8f985e2f0173/status', FALSE, 11),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/88363357e367ec6d0ff1d6825a70dddc/status', FALSE, 12),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/dac1c284e2bc3009bec4b0bc1f11bae4/status', FALSE, 13),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/459318337a262cb1f9e442aa73b3fe3d/status ', FALSE, 14),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/80348fe8b92c2043acba2abefb75c7f2/status ', FALSE, 15),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/08f66ffe6766217da519d1edab21160e/status', FALSE, 16),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/ac40e1254e39e18038cf31c3b6eea8a3/status', FALSE, 17),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/d392eb09e16da5788e8a4bd5683642fa/status', FALSE, 18),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/444ac17a45781a85594efadc50476d62/status', FALSE, 19),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/862c3f912e73240c8301c585c334c8ac/status', FALSE, 20),
//         ('Github Repo - Coming Soon', '...', FALSE, 21),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/31ff8af8def12c790c089f34adef4782/status', FALSE, 22),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/cda0651c9655f7c39b599f55bfd8af82/status', FALSE, 23),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/49f51ad50a8889a138270df17c167ba1/status', FALSE, 24),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/3abbd54a089d55a0c8f25565f193c3c5/status', FALSE, 25),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/2b999d93f397073544695343b44fc460/status', FALSE, 26),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/ccad26d2c97cce28b328bab7c54b9dce/status', FALSE, 27),
//         ('Github Repo', 'https://classroom.github.com/assignment-invitations/51804c6d2129d95c3bd9ab521e407be7/status', FALSE, 28);
//     `);

//   // Seed the comments table
//   await pool.query(`
//       INSERT INTO comments (comment,added_date,workshop_id)
//       VALUES
//       ('I found this really helpful', '2023-10-25', 1),
//       ('This looks really good !', '2023-10-25', 1),
//       ('This is a very good example!', '2023-10-25', 1);
//       `);
// }
