// src/data/techStack.ts
import type { TechCategory } from '../types';

export const techStackData: TechCategory[] = [
  {
    category: "Frontend",
    technologies: [
      { name: "JavaScript", icon: "Js" },
      { name: "React", icon: "Atom" },
      { name: "HTML5", icon: "Html5" },
      { name: "CSS3", icon: "Css3" },
      { name: "Java", icon: "Java" },
    ]
  },
  {
    category: "Backend & Databases",
    technologies: [
      { name: "JavaScript", icon: "Js" },
      { name: "PHP", icon: "Php" },
      { name: "Firebase", icon: "Fire" },
      { name: "MySQL", icon: "Database" },
    ]
  },
  {
    category: "Ferramentas",
    technologies: [
      { name: "Git", icon: "GitBranch" },
      { name: "Docker", icon: "Docker" },
      { name: "Figma", icon: "Figma" },
      { name: "Excel", icon: "Excel" },
      { name: "Azure", icon: "Cloud" },
    ]
  },
];