const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Home</title>
        </head>
        <body>
            <h1>Welcome to Our Express Web Server</h1>
            <p>This is the Home page.</p>
        </body>
        </html>
    `);
});

// About Route
app.get("/about", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>About</title>
        </head>
        <body>
            <h1>About Us</h1>
            <p>We are learning backend development using Express.js.</p>
        </body>
        </html>
    `);
});

// Services Route
app.get("/services", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Services</title>
        </head>
        <body>
            <h1>Our Services</h1>
            <ul>
                <li>Web Development</li>
                <li>Backend Development</li>
                <li>API Development</li>
            </ul>
        </body>
        </html>
    `);
});

// Contact Route
app.get("/contact", (req, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Contact</title>
        </head>
        <body>
            <h1>Contact Us</h1>
            <p>Email: contact@example.com</p>
            <p>Phone: +91 9876543210</p>
        </body>
        </html>
    `);
});

// Custom 404 Error Handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>404 - Page Not Found</title>
        </head>
        <body>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go to Home</a>
        </body>
        </html>
    `);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`);
});
