import { Code, Database, Settings } from 'lucide-react';

export const projects = [
  {
    title: "Gestion de Voitures",
    description: "Application web complète avec dashboard admin pour la gestion d'un parc automobile, utilisant les technologies modernes du stack JavaScript.",
    image: "https://images.unsplash.com/photo-1551522435-a131bf5e493b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "React Admin", "TypeScript", "Node.js"],
    link: "https://github.com/loicqua/car-management-app"
  },
  {
    title: "Recommandations de Jeux",
    description: "Un site web simple et élégant pour découvrir des recommandations de jeux vidéo, entièrement codé en HTML et CSS.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    link: "https://github.com/loicqua/game-reco-site"
  },
  {
    title: "Lecteur de Musique Mobile",
    description: "Une application mobile cross-platform pour écouter de la musique, développée avec React Native pour une expérience utilisateur fluide.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React Native", "Expo", "JavaScript"],
    link: "https://github.com/loicqua/music-player-native"
  }
];

export const skills = [
  {
    category: "Backend",
    icon: Database,
    techs: ["Node.js", "Express.js", "Prisma ORM"]
  },
  {
    category: "Database",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB"]
  },
  {
    category: "Tools",
    icon: Settings,
    techs: ["VSCode", "Git", "Github", "CI/CD"]
  },
  {
    category: "Frontend",
    icon: Code,
    techs: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"]
  }
];
