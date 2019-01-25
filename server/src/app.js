require('dotenv').config()

const express   = require('express');
const app       = express();
const path      = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const index = require('./routes/index');
const pokedex = require('./routes/pokedex');

app.use('/', index);
app.use('/pokedex', pokedex);


const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Running at Port 3000");
});
