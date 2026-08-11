const fs = require("fs");
const path = require("path");

const fileName = "data.txt";
const filePath = path.join(__dirname, fileName);

// CREATE - Create a new file
function createFile() {
    const content = "Welcome to the Node.js File Management System.\n";

    fs.writeFile(filePath, content, "utf8", (error) => {
        if (error) {
            console.error("Error creating file:", error.message);
            return;
        }

        console.log("File created successfully.");
    });
}

// READ - Read file contents
function readFile() {
    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            console.error("Error reading file:", error.message);
            return;
        }

        console.log("\nFile Content:");
        console.log(data);
    });
}

// UPDATE - Add new content to the file
function updateFile() {
    const newContent = "This content was added during the update operation.\n";

    fs.appendFile(filePath, newContent, "utf8", (error) => {
        if (error) {
            console.error("Error updating file:", error.message);
            return;
        }

        console.log("File updated successfully.");
    });
}

// DELETE - Delete the file
function deleteFile() {
    fs.unlink(filePath, (error) => {
        if (error) {
            console.error("Error deleting file:", error.message);
            return;
        }

        console.log("File deleted successfully.");
    });
}

// Run CRUD operations
console.log("Starting File Management System...\n");

createFile();

setTimeout(() => {
    readFile();
}, 500);

setTimeout(() => {
    updateFile();
}, 1000);

setTimeout(() => {
    readFile();
}, 1500);

setTimeout(() => {
    deleteFile();
}, 2000);
