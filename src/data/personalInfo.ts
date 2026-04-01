import type { PersonalInfo, ContactInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: "João Pedro da Cruz",
  title: "Desenvolvedor Front-End",
  subtitle: "",
  bio: "Front-End Developer em busca do Fullstack.",
  quote: "A criatividade flui através de mim"
};

export const contactInfo: ContactInfo = {
  email: "joaope4dro@gmail.com",
  location: "São Paulo, Brasil",
  availability: "Disponível para novos projetos"
};

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/PedroCruzDm", icon: "Github" },
  { platform: "Instagram", url: "#", icon: "Instagram" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/jo%C3%A3o-pedro-cruz-237131277/", icon: "Linkedin" },
  { platform: "YouTube", url: "https://www.youtube.com/@ApenasDev", icon: "Youtube" },
];