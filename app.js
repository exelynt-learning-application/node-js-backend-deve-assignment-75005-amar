const fs = require("fs");

console.log("=== Synchronous Execution ===");

console.log("1. Synchronous operation started");

try {
    const data = fs.readFileSync("input.txt", "utf8");
    console.log("2. File data:", data);
} catch (error) {
    console.log("Error reading file:", error.message);
}

console.log("3. Synchronous operation completed");

console.log("\n=== Asynchronous Execution ===");

console.log("1. Asynchronous operation started");

fs.readFile("input.txt", "utf8", (error, data) => {
    if (error) {
        console.log("Error reading file:", error.message);
        return;
    }

    console.log("4. Asynchronous callback executed");
    console.log("File data:", data);
});

console.log("2. Program continues while file is being read");

console.log("3. Program execution continues...");

console.log("\n=== Callback with setTimeout ===");

console.log("Main program started");

setTimeout(() => {
    console.log("First callback executed after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("Second callback executed after 1 second");
}, 1000);

console.log("Main program completed");
