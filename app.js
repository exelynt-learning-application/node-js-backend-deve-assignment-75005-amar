const express = require("express");

const app = express();

const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`);
});
