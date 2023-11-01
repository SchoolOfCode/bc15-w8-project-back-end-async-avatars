// Import required modules
import express from "express";  // Import the Express framework
import morgan from "morgan";    // Import the Morgan middleware for logging
import cors from "cors";        // Import the CORS middleware for handling cross-origin requests

import { workshopsRoutes } from "./routes/workshopsRoutes.js";  // Import the routes for workshops (custom module)

// Create an Express application instance
export const app = express();

// Configure Cross-Origin Resource Sharing (CORS) for the application
app.use(
    cors(

    )
);

// Use the Morgan middleware for request logging in 'dev' format
app.use(morgan("dev"));

// Parse incoming JSON requests and make the data available in req.body
app.use(express.json());

// Define a route for handling requests related to "workshops"
app.use("/workshops", workshopsRoutes);

// (Optional) You can define more routes or middleware for handling "errors" here if needed
// app.use("/errors", errorsRoutes);