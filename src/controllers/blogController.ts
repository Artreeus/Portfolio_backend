// // src/controllers/blogController.ts
// import { Request, Response } from 'express';
// import Blog from '../models/Blog';

// export const getAllBlogs = async (req: Request, res: Response) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 });
//     res.json(blogs);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching blogs', error });
//   }
// };

// export const getBlogById = async (req: Request, res: Response) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching blog', error });
//   }
// };

// export const createBlog = async (req: Request, res: Response) => {
//   try {
//     const blog = new Blog(req.body);
//     const savedBlog = await blog.save();
//     res.status(201).json(savedBlog);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating blog', error });
//   }
// };

// export const updateBlog = async (req: Request, res: Response) => {
//   try {
//     const blog = await Blog.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating blog', error });
//   }
// };

// export const deleteBlog = async (req: Request, res: Response) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json({ message: 'Blog deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting blog', error });
//   }
// };


// src/controllers/blogController.ts
import { Request, Response } from 'express';
import Blog from '../models/Blog';

export const getAllBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

export const getBlogById = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error });
  }
};

export const createBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = new Blog(req.body);
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

export const updateBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog', error });
  }
};

export const deleteBlog = async (req: Request, res: Response): Promise<void> => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      res.status(404).json({ message: 'Blog not found' });
      return;
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
  }
};