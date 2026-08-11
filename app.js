const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send(`
        <h1>Home Page</h1>
        <p>Welcome to our Express.js application.</p>
    `);
});

// About Route
app.get("/about", (req, res) => {
    res.send(`
        <h1>About Page</h1>
        <p>This application demonstrates Express.js routing.</p>
    `);
});

// Contact Route
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact Page</h1>
        <p>Email: contact@example.com</p>
        <p>Phone: +91 9876543210</p>
    `);
});

// Services Route
app.get("/services", (req, res) => {
    res.send(`
        <h1>Services Page</h1>
        <ul>
            <li>Web Development</li>
            <li>Backend Development</li>
            <li>API Development</li>
        </ul>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
