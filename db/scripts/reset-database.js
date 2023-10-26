import { pool } from "../index.js";
import { resetDatabase } from "../helpers.js";

try {
  await resetDatabase();
  console.log("Database reset successful");
} catch (error) {
  console.error("Database reset failed: ", error);
}

await resetDatabase();
