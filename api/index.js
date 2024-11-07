const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS if needed
app.use(cors());
app.use(express.json());

let phoneNumbers = []; // Array to store phone numbers in memory

// Route to handle phone number submission
app.post('/api/submit-number', (req, res) => {
    const { phoneNumber } = req.body;
    if (phoneNumber) {
        phoneNumbers.push(phoneNumber); // Add phone number to array
        res.status(200).send({ message: 'Phone number received' });
    } else {
        res.status(400).send({ message: 'Phone number is missing' });
    }
});

// Route to display all submitted phone numbers
app.get('/api/numbers', (req, res) => {
    res.status(200).send(phoneNumbers.join('\n')); // Display numbers line by line
});

// Export for Vercel serverless function
module.exports = app;
