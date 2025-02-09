// src/types/index.ts
export interface Blog {
    _id?: string;
    title: string;
    content: string;
    imageUrl: string;
    category: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface Project {
    _id?: string;
    title: string;
    description: string;
    imageUrl: string;
    liveLink: string;
    technologies: string[];
    createdAt?: Date;
    updatedAt?: Date;
  }