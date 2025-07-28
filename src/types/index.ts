export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'cloud' | 'ai';
  status: 'completed' | 'in-progress' | 'archived';
  metrics?: {
    users?: string;
    performance?: string;
    impact?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  description: string[];
  achievements?: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  gpa?: string;
  honors?: string[];
  coursework?: string[];
  projects?: string[];
}

export interface Skill {
  name: string;
  level: number;
  experience: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  color: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}