const express = require("express");

const app = express();

const PORT = 3000;

// Sample resource collection
const students = [
    {
        id: 1,
        name: "Rahul",
        course: "Node.js",
        marks: 85
    },
    {
        id: 2,
        name: "Priya",
        course: "Python",
        marks: 90
    },
    {
        id: 3,
        name: "Amit",
        course: "Java",
        marks: 78
    }
];

// REST API endpoint
app.get("/api/students", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`REST API server is running at http://localhost:${PORT}`);
});
