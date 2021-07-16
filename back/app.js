const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;
var movieController = require('./controllers/movieController.js');
const { mongoose } = require('./db.js');
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200', }));

app.use('/', movieController);

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`));