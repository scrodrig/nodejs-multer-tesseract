const express = require('express');
const router = express.Router();
const documentsController = require('../controllers/documentsController');

router
    .route('/')
    .post(documentsController.uploadDocument);

module.exports = router;