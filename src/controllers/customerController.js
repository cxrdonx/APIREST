 const controller = {};

 controller.list = (req, res) =>{
      //pedir conexion a mysql
      req.getConnection((err, conn) => {
          conn.query('SELECT * FROM user', (err, user) => {  
          if(err){
              res.json(err);
          }
          console.log(user);
          res.render('user');
                  });
              
          
      });
     

 };

 module.exports = controller;