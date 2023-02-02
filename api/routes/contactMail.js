const express = require('express');
const router = express.Router();
const { contactPost } = require('../controllers/contactMailControllers');

router.post('/', contactPost);

module.exports = router;
