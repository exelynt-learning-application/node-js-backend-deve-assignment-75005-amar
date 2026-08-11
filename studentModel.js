const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Student name is required"],
            trim: true,
            minlength: [2, "Name must contain at least 2 characters"]
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
            match: [
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                "Please enter a valid email address"
            ]
        },

        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [16, "Age must be at least 16"],
            max: [60, "Age cannot be greater than 60"]
        },

        department: {
            type: String,
            required: [true, "Department is required"],
            enum: {
                values: [
                    "Computer Science",
                    "Information Technology",
                    "Mechanical",
                    "Civil",
                    "Electronics"
                ],
                message: "Invalid department"
            }
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);
