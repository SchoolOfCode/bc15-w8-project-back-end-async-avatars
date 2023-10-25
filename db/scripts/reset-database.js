import { pool } from "../index.js";

async function resetDatabase() {
  try {
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
          added_date DATE,
          workshop_id INT REFERENCES workshops(id) ON DELETE CASCADE NOT NULL
        );
    `);

    // Seed the weeks table
    await pool.query(`
      INSERT INTO weeks (description)
      VALUES
      ('Week 1 - Computational Thinking'),
      ('Week 2 - JavaScript Foundations'),
      ('Week 3 - Front End Foundations');
    `);

    // Seed the workshops table
    await pool.query(`
        INSERT INTO workshops (name, description, date, week_id)
        VALUES
        ('Workshop 1 - Romeo and Juligit', 'Description Placeholder', '2023-09-07', 1),
        ('Hackathon - Escape Room on Scratch', 'Description Placeholder', '2023-09-08', 1),
        ('Workshop 1 - Intro to JavaScript', 'Description Placeholder', '2023-09-11', 2),
        ('Workshop 2 - Loops', 'Description Placeholder', '2023-09-12', 2),
        ('Workshop 1 - Debugging', 'Description Placeholder', '2023-09-18', 3),
        ('Workshop 2 - Intro to the DOM', 'Description Placeholder', '2023-09-19', 3);
    `);

    // Seed the bookmarks table
    await pool.query(`
        INSERT INTO bookmarks (description, url, helpful_links, workshop_id)
        VALUES
        ('Github Repo', 'https://classroom.github.com/a/ElP3Fc9C', FALSE, 1),
        ('Hackathon Repo', 'https://classroom.github.com/assignment-invitations/3fbdc8e4f8e580a676471e598d77ea92/status', FALSE, 2),
        ('Scratch Link', 'https://scratch.mit.edu/', TRUE, 2);
    `);

    // Seed the comments table
    await pool.query(`
      INSERT INTO comments (comment,added_date,workshop_id)
      VALUES
      ('I found this really helpful', '2023-10-25', 1),
      ('This looks really good !', '2023-10-25', 1),
      ('This is a very good example!', '2023-10-25', 1);
      `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
