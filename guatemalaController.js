'use strict'
var Vaccine = require('../models/vaccinations');
var mongoose = require('mongoose');
var controller = { 
      save: function(req, res){
            var vaccine = new Vaccine();
            var params = req.body;
              vaccine.location = params.location; 
              vaccine.date = params.date;
              vaccine.vaccine = params.vaccine;
              vaccine.source_url = params.source_url;
              vaccine.total_vaccinations = params.total_vaccinations;
              vaccine.people_vaccinated = params.people_vaccinated;
              vaccine.people_fully_vaccinated = params.people_fully_vaccinated;
        

              vaccine.save((err, vaccineStored) =>{
                if(err) return res.status(500).send({message:'internal server error'});
                if(!vaccineStored) return res.status(404).send({message: 'could not save'});
                return  res.status(200).send({vaccine:vaccineStored});
       
            });
        
        },  //no olvidar lacoma

        getVaccine: function(req, res){
            var vaccineId = req.params.id;
      if(vaccineId == null) return res.status(400).send({message:'the ID does not exist'});
            Vaccine.findById(vaccineId, (err, vaccine) =>{    
                 if(err) return res.status(500).send({message: 'error returning data'});
                 if(!vaccine) return res.status(404).send({message:'does not exist'});
                 return res.status(200).send({
                           vaccine
                 });
            
            });
        },  

        //listar todos 
    getVaccines: function(req, res){
             Vaccine.find({}).sort('date').exec((err, vaccine) =>{ 
               if(err) return res.status(500).send({message:"error returning data"});
               if(!vaccine) return res.status(404).send({message:'there is nothing to show'});
               return res.status(200).send({vaccine});
          
              });
     
    },
   //update
    updateVaccine: function(req, res){
            var vaccineId = req.params.id;
            var update = req.body;
            Vaccine.findByIdAndUpdate(vaccineId, update,{new:true}, (err, vaccineUpdated)=>{
               if(err) return res.status(500).send({message: "error updating data"});
               if(!vaccineUpdated) return res.status(404).send({message:"does not exist"});
               return res.status(200).send({vaccine: vaccineUpdated});
            });
    },

    //delete
    deleteVaccine: function(req, res){
                var vaccineId = req.params.id;
                Vaccine.findByIdAndRemove(vaccineId, (err, vaccineRemoved) =>{
                  if(err) return res.status(500).send({message:"error removing data"});
                  if(!vaccineRemoved) return res.status(404).send({message:"can't be deleted"});
                  return res.status(200).send({vaccine: vaccineRemoved});
                })
    },

    uploadImage: function(req, res){
      var vaccineId = req.params.id;
      var fileName = 'the image was not uploaded';
  
      if(req.files){
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];
  
        if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
  
          Vaccine.findByIdAndUpdate(vaccineId, {image: fileName}, {new: true}, (err, vaccineUpdated) => {
            if(err) return res.status(500).send({message: 'upload error'});
  
            if(!vaccineUpdated) return res.status(404).send({message: 'does not exist'});
  
            return res.status(200).send({
              Vaccine: vaccineUpdated
            });
          });
  
        }else{
          fs.unlink(filePath, (err) => {
            return res.status(200).send({message: 'extension not valid'});
          });
        }
  
      }else{
        return res.status(200).send({
          message: fileName
        });
      }
  
    },

};
module.exports = controller;
