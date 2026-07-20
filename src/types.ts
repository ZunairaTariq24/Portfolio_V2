export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'mobile' | 'desktop' | 'iot' | 'other';
  tags: string[];
  features: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
}

export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90)
  category: 'Frontend' | 'Backend' | 'Databases' | 'Programming' | 'Tools';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  bulletPoints: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
  details: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WhyHire {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  stars: number;
  avatarUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  iconName: string;
  credentialUrl?: string;
}
