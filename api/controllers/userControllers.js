/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  } else {
    res.status(401).json('You can update only your account!');
  }
};

const deleteUser = async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted.');
      } catch (err) {
        res.status(500).json(err);
        console.log(err)
      }
    } catch (error) {
      res.status(404).json('User not found.');
    }
  } else {
    res.status(401).json('You can update only your account!');
  }
};

module.exports = {
  updateUser,
  deleteUser,
};
