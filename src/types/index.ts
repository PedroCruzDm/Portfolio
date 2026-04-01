// src/types/index.ts

// Interface para itens da linha do tempo
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  technologies?: string[];
}

// Interface para projetos
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;           // caminho da imagem em public/images/projects/
  status: 'operational' | 'in-development' | 'completed';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'fullstack' | 'frontend' | 'backend';
}

// Interface para tecnologias (Arsenal)
export interface TechCategory {
  category: string;
  icon?: string;
  technologies: TechItem[];
}

export interface TechItem {
  name: string;
  icon?: string;            // nome do ícone do lucide-react ou caminho
  color?: string;
}

// Interface para informações de contato
export interface ContactInfo {
  email: string;
  location: string;
  availability: string;
}

// Interface para dados pessoais
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  quote?: string;
}

// Interface para rede social
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;             // nome do ícone (github, instagram, etc.)
}

// Tipos úteis para componentes
export type SectionId = 
  | 'hero' 
  | 'about' 
  | 'timeline' 
  | 'projects' 
  | 'techstack' 
  | 'contact';

export type ProjectStatus = 'operational' | 'in-development' | 'completed';