const os = require("os");

console.log("=================================");
console.log("      SYSTEM INFORMATION VIEWER");
console.log("=================================");

// CPU Information
const cpuInfo = os.cpus();

console.log("\nCPU Information");
console.log("-----------------------------");
console.log("CPU Model:", cpuInfo[0].model);
console.log("CPU Cores:", cpuInfo.length);

// Memory Information
const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log("\nMemory Information");
console.log("-----------------------------");
console.log(
    "Total Memory:",
    (totalMemory / (1024 ** 3)).toFixed(2),
    "GB"
);
console.log(
    "Free Memory:",
    (freeMemory / (1024 ** 3)).toFixed(2),
    "GB"
);
console.log(
    "Used Memory:",
    ((totalMemory - freeMemory) / (1024 ** 3)).toFixed(2),
    "GB"
);

// Hostname
console.log("\nSystem Information");
console.log("-----------------------------");
console.log("Hostname:", os.hostname());
console.log("Platform:", os.platform());
console.log("Operating System:", os.type());
console.log("Architecture:", os.arch());

// Uptime
const uptimeInSeconds = os.uptime();
const uptimeInHours = (uptimeInSeconds / 3600).toFixed(2);

console.log("System Uptime:", uptimeInHours, "hours");

console.log("\n=================================");
console.log("System information displayed successfully.");
console.log("=================================");
