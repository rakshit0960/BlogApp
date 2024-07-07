import { Request, Response } from 'express';
import { BlogPost } from '../types/blogTypes';
import * as blogModel from '../models/blogModel';

export async function createBlog(req: Request, res: Response) {
  try {

    const userId = (req as any).user.userId;
    const blogPost: BlogPost = req.body;
    const id = await blogModel.createBlogPost(blogPost, userId);
    res.status(201).json({ id });

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Error creating blog post' });

  }
}

export async function getBlog(req: Request, res: Response) {
  try {

    const id = parseInt(req.params.id);
    const blogPost = await blogModel.getBlogPost(id);
    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    res.json(blogPost);

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Error retrieving blog post' });

  }
}

export async function updateBlog(req: Request, res: Response) {
  try {

    const id = parseInt(req.params.id);
    const blogPost: BlogPost = req.body;
    await blogModel.updateBlogPost(id, blogPost);
    res.status(204).send();

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Error updating blog post' });

  }
}

export async function deleteBlog(req: Request, res: Response) {
  try {

    const id = parseInt(req.params.id);
    await blogModel.deleteBlogPost(id);
    res.status(204).send();

  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Error deleting blog post' });
    
  }
}