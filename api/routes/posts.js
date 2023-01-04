/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
const express = require('express');

const router = express.Router();

const {
  allPost, createPost, getPost, updatePost, deletePost
} = require('../controllers/postControllers');

router.get('/', allPost);
router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
