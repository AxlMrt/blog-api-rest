require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/db/connect');
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

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
