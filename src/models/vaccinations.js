    'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vaccinationInfo = Schema ({
      location: String,
      date: String,
      vaccine: String,
      source_url: String,
      total_vaccinations: Number,
      people_vaccinated: Number,
      people_fully_vaccinated: Number   

});

module.exports = mongoose.model('Vaccine', vaccinationInfo);