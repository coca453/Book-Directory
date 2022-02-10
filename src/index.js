require('dotenv').config();

const express = require('express');
const cors = require('cors');

//EXPRESS
const app = express();

//CORS
app.use(cors());

app.use(express.json());

//ROUTER
app.use('/api/book-Directory', require('./routes/book-directory'))




app.listen( 1000, () =>{
    console.log("Conectado")
} )