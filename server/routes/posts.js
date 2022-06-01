import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const route = express.Router({});

route.get('/', getPosts);
route.post('/', createPost);
route.get('/:id', getPost);
route.patch('/:id', updatePost);
route.delete('/:id', deletePost);
route.patch('/:id/like', likePost);

export default route;