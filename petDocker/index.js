const express = require('express')
const cors = require('cors');

const port = 8080;
const host = '0.0.0.0';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
    res.send({
        "courses": [
            "HTML", "CSS", "DOCKER", "OOP"
        ]
    })
});

app.get('/test', (req, res) => {
    res.send('Hello World')
});

app.listen(port, host);
console.log(`Running on http://${host}:${port}/`)
