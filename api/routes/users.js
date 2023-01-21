const express = require('express');

const router = express.Router();
const { updateUser, deleteUser } = require('../controllers/userControllers');
const { verify } = require('../config/jwt/tokens');

router.put('/:id', verify, updateUser);
router.delete('/:id', verify, deleteUser);

module.exports = router;
