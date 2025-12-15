export interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    code?: string;
  };
  features?: string[];
  images?: string[];
}

export interface Profile {
  name: string;
  title: string;
  image: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    address: string;
  };
  summary: string[];
}