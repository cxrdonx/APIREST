const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM pais', (err, guatemala) =>{
            if(err){
                res.json(err);
            }
            console.log(guatemala);
            res.render('guatemala');
        });
    });
};

module.exports = controller;