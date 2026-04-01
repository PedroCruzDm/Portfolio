// src/data/projects.ts
import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "calendario-escolar",
    title: "Calendário Escolar",
    description: "Aplicativo de calendário escolar com React, CSS e Firebase.",
    image: "/images/projects/pontuar-calendar.png",
    status: "operational",
    technologies: ["React", "CSS3", "Firebase"],
    category: "fullstack",
    githubUrl: "https://pedrocruzdm.github.io/Etec_Calendario/",
    liveUrl: "",
  },
  {
    id: "pontuar-calendar",
    title: "Pontuar Calendar",
    description: "Protótipo de calendário escolar com compartilhamento em tempo real.",
    image: "/images/projects/Pontuar_calendario.jpg",
    status: "operational",
    technologies: ["React", "CSS3", "Firebase"],
    category: "fullstack",
    githubUrl: "",
  },
  {
    id: "orbis",
    title: "Orbis",
    description: "Aplicativo em desenvolvimento com informações astronômicas e espaciais.",
    image: "/images/projects/Orbis.png",
    status: "in-development",
    technologies: ["React Native", "CSS", "Firebase", "TypeScript", "Expo"],
    category: "frontend",
    githubUrl: "#",
  },
    {
    id: "tec1",
    title: "Filtro de planilhas Excel",
    description: "Um script em JavaScript onde lê um arquivo .Xlsx, pega colunas importantes, faz verificações com regras especificas e gera um novo arquivo .csv com os dados filtrados e resultado final (ex: aprovado ou reprovado).",
    image: "",
    status: "completed",
    technologies: ["JavaScript", "Excel"],
    category: "backend",
    githubUrl: "#",
  },
];