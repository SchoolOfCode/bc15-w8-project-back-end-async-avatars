//Import the 'app' object from the 'app.js' file
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

// Get the port number from the environment variables
const PORT = process.env.PORT;

console.log("DB_CONNECTION_STRING:", process.env.DB_CONNECTION_STRING)

// Start the server and make it listen on the specified port
app.listen(PORT, function () {
  // Print a message to the console indicating that the server is listening on the specified port
  console.log(`Server listening on port ${PORT}`);
});