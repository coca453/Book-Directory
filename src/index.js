require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./config/config');

//EXPRESS
const app = express();

//CORS
app.use(cors());

app.use(express.json());

//db
dbConnection();

//ROUTER
app.use('/api/book-Directory', require('./routes/book-directory'))

app.get('/', function (req, res) {
    res.send('hello world')
  })



app.listen( process.env.PORT, () =>{
    console.log("Conectado a " + process.env.PORT )
} )