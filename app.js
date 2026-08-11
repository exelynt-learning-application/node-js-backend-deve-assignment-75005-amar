const fs = require("fs");

const inputFile = "input.txt";
const outputFile = "output.txt";

// Read data from input.txt
fs.readFile(inputFile, "utf8", (readError, data) => {
    if (readError) {
        console.error("Error: Unable to read the input file.");
        console.error(readError.message);
        return;
    }

    console.log("Data read successfully from input.txt:");
    console.log(data);

    // Write data into output.txt
    fs.writeFile(outputFile, data, "utf8", (writeError) => {
        if (writeError) {
            console.error("Error: Unable to write to the output file.");
            console.error(writeError.message);
            return;
        }

        console.log("Data successfully copied from input.txt to output.txt");
    });
});
