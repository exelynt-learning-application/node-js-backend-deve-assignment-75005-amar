const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Check MongoDB configuration
if (!MONGO_URI) {
    console.error("MONGO_URI is not configured in the .env file.");
    process.exit(1);
}

// Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully.");

        // Start server only after successful database connection
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed.");
        console.error(error.message);
        process.exit(1);
    });

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Node.js application is running.",
        database: mongoose.connection.readyState === 1
            ? "Connected"
            : "Disconnected"
    });
});
