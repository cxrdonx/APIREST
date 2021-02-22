'use strict'

var controller = {
       
      home: function(req, res){
          return res.status(200).send({
              message: "home"
          });
      },

      test: function(req, res){
          return res.status(200).send({
              message:"test"
          });
      }


};
module.exports = controller;