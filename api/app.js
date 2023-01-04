/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');

const app = express();

const connectDB = require('./config/db/connect');

const PORT = process.env.PORT || 5000;

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');

// middleware
app.use(express.json());

// routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);

// server
const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log('Connected to the DB.');
    await app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}.`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
