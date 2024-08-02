const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "https://my-frontend-eight.vercel.app",
}));

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        const numbers = [];
        const alphabets = [];

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: "Invalid input format" });
        }

        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (typeof item === 'string' && item.length === 1) {
                alphabets.push(item);
            }
        });

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers: numbers,
            alphabets: alphabets,
            highest_alphabet: alphabets.length ? [alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).pop()] : []
        };

        res.json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: "Server error" });
    }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
