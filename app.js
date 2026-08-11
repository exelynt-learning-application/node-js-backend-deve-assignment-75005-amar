const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

const filePath = fileName
    ? path.join(__dirname, fileName)
    : null;

function showHelp() {
    console.log(`
Node.js Command-Line File Utility

Usage:

Create a file:
node app.js create file.txt "Hello Node.js"

Read a file:
node app.js read file.txt

Update a file:
node app.js update file.txt "New content"

Delete a file:
node app.js delete file.txt

List files:
node app.js list
`);
}

function createFile() {
    if (!fileName) {
        console.log("Error: Please provide a file name.");
        return;
    }

    if (fs.existsSync(filePath)) {
        console.log("Error: File already exists.");
        return;
    }

    fs.writeFile(filePath, content || "", "utf8", (error) => {
        if (error) {
            console.log("Error creating file:", error.message);
            return;
        }

        console.log(`File "${fileName}" created successfully.`);
    });
}

function readFile() {
    if (!fileName) {
        console.log("Error: Please provide a file name.");
        return;
    }

    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            console.log("Error reading file:", error.message);
            return;
        }

        console.log(`\nContent of "${fileName}":`);
        console.log("--------------------------------");
        console.log(data);
        console.log("--------------------------------");
    });
}

function updateFile() {
    if (!fileName) {
        console.log("Error: Please provide a file name.");
        return;
    }

    fs.appendFile(filePath, `\n${content}`, "utf8", (error) => {
        if (error) {
            console.log("Error updating file:", error.message);
            return;
        }

        console.log(`File "${fileName}" updated successfully.`);
    });
}

function deleteFile() {
    if (!fileName) {
        console.log("Error: Please provide a file name.");
        return;
    }

    fs.unlink(filePath, (error) => {
        if (error) {
            console.log("Error deleting file:", error.message);
            return;
        }

        console.log(`File "${fileName}" deleted successfully.`);
    });
}

function listFiles() {
    fs.readdir(__dirname, { withFileTypes: true }, (error, files) => {
        if (error) {
            console.log("Error listing files:", error.message);
            return;
        }

        console.log("\nFiles in the current directory:");
        console.log("--------------------------------");

        files
            .filter((file) => file.isFile())
            .forEach((file) => {
                console.log(file.name);
            });

        console.log("--------------------------------");
    });
}

switch (command) {
    case "create":
        createFile();
        break;

    case "read":
        readFile();
        break;

    case "update":
        updateFile();
        break;

    case "delete":
        deleteFile();
        break;

    case "list":
        listFiles();
        break;

    default:
        showHelp();
}
