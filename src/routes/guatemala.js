const express = require('express');
const router = express();
const guatemalaController = require('../controllers/guatemalaController');

router.get('/guatemala', guatemalaController.list);
 module.exports = router