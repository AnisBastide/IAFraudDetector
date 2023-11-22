const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors({
    origin: 'http://localhost:9000'
}));

app.use(bodyParser.json());

app.post('/sendFraude', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received and processed' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
