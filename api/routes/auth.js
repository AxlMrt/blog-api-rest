const express = require('express');
const router = express.Router();

const { register, login, logout, refresh } = require('../controllers/authControllers');
const { verify } = require('../config/jwt/tokens');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verify, logout);
router.post('/refresh', refresh);

module.exports = router;
