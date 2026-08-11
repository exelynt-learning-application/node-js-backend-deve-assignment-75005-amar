const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1>Welcome to Node.js</h1>
                    <p>This is the Home page.</p>
                </body>
            </html>
        `);
    }

    else if (url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>About</title>
                </head>
                <body>
                    <h1>About Us</h1>
                    <p>This page provides information about our application.</p>
                </body>
            </html>
        `);
    }

    else if (url === "/contact") {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
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
    }

    else if (url === "/api") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        const response = {
            success: true,
            message: "Welcome to the Node.js API",
            data: {
                name: "Node.js Server",
                version: "1.0"
            }
        };

        res.end(JSON.stringify(response));
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        });

        res.end(`
            <html>
                <head>
                    <title>404 - Page Not Found</title>
                </head>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <p>The requested page does not exist.</p>
                    <a href="/">Go to Home</a>
                </body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
