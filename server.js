const express = require('express');
const db = require('./database');
const app = express();

app.use(express.json());
app.listen(3000, () => console.log('Server running on port 3000'));

app.post('/put', (req, res) => {
    const {key, value} = req.body;
    db.put(key, value);
    res.send('Value stored for key: ${key}');
});

app.get('/get/:key', (req, res) => {
    const value = db.get(req.params.key);
    if (value === undefiend) {
        res.status(404).send('Key not found');
    } else {
        res.send('Value pointed by the key: ${value}');
    }
});