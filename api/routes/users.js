const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const { updateUser, deleteUser } = require('../controllers/userControllers');

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json('Token is not valid.');
      }

      req.user = user;
      next();
    });

  } else {
    res.status(401).json('You are not authenticated.')
  }
}

router.put('/:id', updateUser);
router.delete('/:id', verify, deleteUser);

module.exports = router;
