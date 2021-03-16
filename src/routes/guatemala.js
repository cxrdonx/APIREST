const express = require('express');
const guatemalaController = require('../controllers/guatemalaController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './uploads'});
const router = express();



router.post('/save', guatemalaController.save);
router.get('/vaccines/:id?', guatemalaController.getVaccine);
router.get('/allvaccines', guatemalaController.getVaccines);
router.put('/vaccines/:id?', guatemalaController.updateVaccine);
router.delete('/vaccines/:id?', guatemalaController.deleteVaccine);
router.post('/upload-image/:id',multipartMiddleware,guatemalaController.uploadImage);
 module.exports = router 