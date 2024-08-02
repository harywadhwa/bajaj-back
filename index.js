const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    
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
        highest_alphabet: alphabets.length ? [alphabets.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'})).pop()] : []
    };

    res.json(response);
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
