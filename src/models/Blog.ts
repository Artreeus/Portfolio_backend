// src/models/Blog.ts
import mongoose, { Schema } from 'mongoose';
import { Blog } from '../types';

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<Blog>('Blog', blogSchema);
