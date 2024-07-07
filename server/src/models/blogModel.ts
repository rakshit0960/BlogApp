import pool from '../db';
import { BlogPost } from '../types/blogTypes';

export async function createBlogPost(blogPost: BlogPost, userId: number) {
  const result = await pool.query(
    'INSERT INTO blogs (data, user_id) VALUES ($1, $2) RETURNING id',
    [JSON.stringify(blogPost), userId]
  );
  return result.rows[0].id;
}

export async function getBlogPost(id: number) {
  const result = await pool.query('SELECT data FROM blogs WHERE id = $1', [id]);
  if (result.rows.length === 0) {
    return null;
  }
  return result.rows[0].data as BlogPost;
}

export async function updateBlogPost(id: number, blogPost: BlogPost) {
  await pool.query('UPDATE blogs SET data = $1 WHERE id = $2', [JSON.stringify(blogPost), id]);
}

export async function deleteBlogPost(id: number) {
  await pool.query('DELETE FROM blogs WHERE id = $1', [id]);
}