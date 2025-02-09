// src/models/Project.ts
import mongoose, { Schema } from 'mongoose';
import { Project } from '../types';

const projectSchema = new Schema<Project>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  liveLink: { type: String, required: true },
  technologies: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<Project>('Project', projectSchema);
