/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');

const app = express();
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const connectDB = require('./config/db/connect');

const PORT = process.env.PORT || 5000;

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const catRoute = require('./routes/categories');

// middleware
app.use(cors());
app.use(express.json());
app.use('/public/images', express.static(path.join(__dirname, '/public/images')));

// storage for files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },

  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

// routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute);
app.use('/api/v1/categories', catRoute);

app.post('/api/v1/uploads', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded.');
});

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
