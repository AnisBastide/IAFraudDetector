const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors({
    origin: 'http://localhost:9000'
}));

app.use(bodyParser.json());

app.post('/sendFraude', async (req, res) => {
    console.log(req.body);
    const result = await axios.post('http://localhost:8000', req.body)
    console.log(result.data)
    res.json(result.data.prediction);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
