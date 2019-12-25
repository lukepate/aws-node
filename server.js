const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // We will be coding here
    res.send('this works')
});

app.post('/book', (req, res) => {
    // We will be coding here
});

app.listen(8080, () => console.log(`Hello world app listening on port 3000!`));
