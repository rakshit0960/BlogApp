import express from 'express'
import { createBlog } from '../../controllers/blogController';

const router = express.Router();

router.post('/createBlogPost', createBlog);

export default router;