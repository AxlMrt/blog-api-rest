const jwt = require('jsonwebtoken');
require('dotenv').config();

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
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
    res.status(401).json('You are not authenticated.');
  }
};

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY,
    { expiresIn: '15m' }
  );
}

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY,
  );
}

module.exports = {
  verify,
  generateAccessToken,
  generateRefreshToken
};
