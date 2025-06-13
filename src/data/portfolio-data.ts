import { Code, Database, Settings } from 'lucide-react';

export const projects = [
  {
    title: "Plateforme de Vente de Véhicules",
    description: "CarShow est une application web full-stack pour présenter et gérer un catalogue de voitures de luxe. Basée sur Next.js 15, elle offre une navigation rapide et des fonctionnalités de recherche, filtrage et prise de rendez-vous.",
    image: "/car.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "shadcn/ui", "Zod"],
    link: "https://carshow-one.vercel.app/"
  },
  {
    title: "Simulation Menu USSD",
    description: "Simulation d’un menu USSD Telma (MVola) en TypeScript, inspiré des menus interactifs comme #111*1#.",
    image: "/yas.jpg",
    tags: ["TypeScript", "Shell"],
    link: "https://github.com/loiqua/USSD-TELMA"
  },
  {
    title: "Lecteur de Musique Mobile",
    description: "Une application mobile cross-platform pour écouter de la musique, développée avec React Native pour une expérience utilisateur fluide.",
    image: "/music.png",
    tags: ["React Native", "Expo", "TypeScript"],
    link: "https://drive.google.com/file/d/1LBR3zq8AJjiDn6EhqBgqFbDolKr8RquA/view"
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
