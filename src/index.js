const mongoose = require ('mongoose');
const app = require('./app');
const port = 3700;  
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/vaccination')
        .then(() =>{
          console.log('conexion establecida');
          app.listen(port,()=>{
              console.log("servidor corriendo correctamennte");
          });

})
        .catch(err =>console.log(err));