/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateAccessToken, generateRefreshToken } = require('../config/jwt/tokens');
require('dotenv').config();

let refreshTokens = [];

const refresh = async (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) return res.status(401).json('You are not authenticated.');
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json('Refresh token is not valid.')
  }

  jwt.verify(refreshToken, process.env.SECRET_KEY, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateAccessToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    });
  });
};

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      res.status(400).json('Wrong credentials');
      return;
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      res.status(400).json('Wrong credentials');
      return;
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);

    const { password, ...others } = user._doc;
    res.status(200).json({
      others,
      accessToken,
      refreshToken
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

const logout = async (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

  res.status(200).json('You logged out successfully.');
}

module.exports = {
  refresh,
  register,
  login,
  logout
};
