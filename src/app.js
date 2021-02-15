const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//import

const customerRoutes = require('./routes/customer');  //se importan las rutas a usar
const guatemalaRoutes = require('./routes/guatemala');
//settings
app.set('port', process.env.PORT || 3000);
app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
   app.use(morgan('dev'));
   app.use(myConnection(mysql,  {
       host: 'localhost',
       user: 'root',
       password: 'admin',
       port: 3306, 
       database: 'vaccinationCAA'
   }, 'single'));
 
//routes
app.use('/', customerRoutes); 
app.use('/guatemala', guatemalaRoutes);
//static files
app.use(express.static(path.join( __dirname, 'public')));

//start the server
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');
});