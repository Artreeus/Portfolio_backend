
// // src/controllers/projectController.ts
// import { Request, Response } from 'express';
// import Project from '../models/Project';

// export const getAllProjects = async (req: Request, res: Response) => {
//   try {
//     const projects = await Project.find().sort({ createdAt: -1 });
//     res.json(projects);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching projects', error });
//   }
// };

// export const getProjectById = async (req: Request, res: Response) => {
//   try {
//     const project = await Project.findById(req.params.id);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json(project);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching project', error });
//   }
// };

// export const createProject = async (req: Request, res: Response) => {
//   try {
//     const project = new Project(req.body);
//     const savedProject = await project.save();
//     res.status(201).json(savedProject);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating project', error });
//   }
// };

// export const updateProject = async (req: Request, res: Response) => {
//   try {
//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json(project);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating project', error });
//   }
// };

// export const deleteProject = async (req: Request, res: Response) => {
//   try {
//     const project = await Project.findByIdAndDelete(req.params.id);
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.json({ message: 'Project deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting project', error });
//   }
// };


// src/controllers/projectController.ts
import { Request, Response } from 'express';
import Project from '../models/Project';

export const getAllProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

export const getProjectById = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
  }
};

export const createProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
  }
};

export const updateProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error });
  }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
};