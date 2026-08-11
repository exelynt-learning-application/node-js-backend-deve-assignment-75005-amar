const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Sample student records
let students = [
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

// CREATE - Add a new student
app.post("/api/students", (req, res) => {
    const { name, course, marks } = req.body;

    if (!name || !course || marks === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, course, and marks are required."
        });
    }

    const newStudent = {
        id: students.length > 0
            ? students[students.length - 1].id + 1
            : 1,
        name,
        course,
        marks
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully.",
        data: newStudent
    });
});

// READ - Get all students
app.get("/api/students", (req, res) => {
    res.status(200).json({
        success: true,
        count: students.length,
        data: students
    });
});

// READ - Get a single student
app.get("/api/students/:id", (req, res) => {
    const studentId = Number(req.params.id);

    const student = students.find(
        (student) => student.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    res.status(200).json({
        success: true,
        data: student
    });
});

// UPDATE - Update an existing student
app.put("/api/students/:id", (req, res) => {
    const studentId = Number(req.params.id);

    const student = students.find(
        (student) => student.id === studentId
    );

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    const { name, course, marks } = req.body;

    if (!name || !course || marks === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, course, and marks are required."
        });
    }

    student.name = name;
    student.course = course;
    student.marks = marks;

    res.status(200).json({
        success: true,
        message: "Student updated successfully.",
        data: student
    });
});

// DELETE - Delete a student
app.delete("/api/students/:id", (req, res) => {
    const studentId = Number(req.params.id);

    const studentIndex = students.findIndex(
        (student) => student.id === studentId
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found."
        });
    }

    const deletedStudent = students.splice(studentIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: "Student deleted successfully.",
        data: deletedStudent
    });
});

// Handle invalid API routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Student CRUD API is running at http://localhost:${PORT}`);
});
