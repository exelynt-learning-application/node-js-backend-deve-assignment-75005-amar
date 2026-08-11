const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory product dataset
let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 55000
    },
    {
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 2500
    },
    {
        id: 3,
        name: "Office Chair",
        category: "Furniture",
        price: 8500
    }
];

// CREATE - Add a new product
app.post("/api/products", (req, res) => {
    const { name, category, price } = req.body;

    if (!name || !category || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, category, and price are required."
        });
    }

    const newProduct = {
        id: products.length > 0
            ? products[products.length - 1].id + 1
            : 1,
        name,
        category,
        price
    };

    products.push(newProduct);

    res.status(201).json({
        success: true,
        message: "Product created successfully.",
        data: newProduct
    });
});

// READ - Get all products
app.get("/api/products", (req, res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
    });
});

// READ - Get product by ID
app.get("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id);

    const product = products.find(
        (item) => item.id === productId
    );

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found."
        });
    }

    res.status(200).json({
        success: true,
        data: product
    });
});

// UPDATE - Update a product
app.put("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id);

    const product = products.find(
        (item) => item.id === productId
    );

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found."
        });
    }

    const { name, category, price } = req.body;

    if (!name || !category || price === undefined) {
        return res.status(400).json({
            success: false,
            message: "Name, category, and price are required."
        });
    }

    product.name = name;
    product.category = category;
    product.price = price;

    res.status(200).json({
        success: true,
        message: "Product updated successfully.",
        data: product
    });
});

// DELETE - Delete a product
app.delete("/api/products/:id", (req, res) => {
    const productId = Number(req.params.id);

    const productIndex = products.findIndex(
        (item) => item.id === productId
    );

    if (productIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Product not found."
        });
    }

    const deletedProduct = products.splice(productIndex, 1)[0];

    res.status(200).json({
        success: true,
        message: "Product deleted successfully.",
        data: deletedProduct
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "API route not found."
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`REST API is running at http://localhost:${PORT}`);
});
