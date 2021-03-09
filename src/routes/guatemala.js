const express = require('express');
const guatemalaController = require('../controllers/guatemalaController');
const router = express();



router.post('/save', guatemalaController.save);
router.get('/vaccines/:id?', guatemalaController.getVaccine);
router.get('/allvaccines', guatemalaController.getVaccines);
router.put('/vaccines/:id?', guatemalaController.updateVaccine);
router.delete('/vaccines/:id?', guatemalaController.deleteVaccine);
 module.exports = router 