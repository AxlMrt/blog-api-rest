/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

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

    const accessToken = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.SECRET_KEY);
    const { password, ...others } = user._doc;
    res.status(200).json({
      others,
      accessToken
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  login,
};
