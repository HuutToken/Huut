import express from 'express'

import { CreatePost, getAllPosts, deletePost, votePost, } from '../controllers/Posts.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/CreatePost', auth, CreatePost)
router.get('/get', getAllPosts)
router.delete('/delete/:id', auth, deletePost );
router.patch('/vote/:id', auth, votePost);

export default router