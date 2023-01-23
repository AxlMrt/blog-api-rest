const express = require('express');
const router = express.Router();

const {
  allPost, createPost, getPost, updatePost, deletePost
} = require('../controllers/postControllers');

const { verify } = require('../config/jwt/tokens');

router.get('/', allPost);
router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', verify, updatePost);
router.delete('/:id', verify, deletePost);

module.exports = router;
