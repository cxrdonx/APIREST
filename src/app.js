const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');  
const app = express();

app.use(bodyParser.urlencoded({encoded:false}));
//import
const guatemala = require('./routes/guatemala');


//settings
//app.set('port', process.env.PORT || 3000);
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//routes
app.use('/', guatemala); //para sobreescribir ruta

//static filesS
app.use(express.static(path.join( __dirname, 'public')));

//start the server
module.exports = app;