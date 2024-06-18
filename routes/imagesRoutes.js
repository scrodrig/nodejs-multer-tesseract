const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imagesController');

router
    .route('/')
    .post(imagesController.uploadImage);

module.exports = router;