import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import { USER_NAMES } from '../constants';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
};

// Define projects data
const ghBase = `https://github.com/${USER_NAMES.githubUsername}`;
const projects = [
  {
    title: 'NotesNeo',
    description: 'Built this because I was tired of hunting for notes everywhere! A platform where students can actually find and share quality notes by subject. No more "does anyone have notes?" in group chats 😄',
    image: '/assets/notesneo.webp',
    link: 'https://notesneo.vercel.app',
    github: `${ghBase}/notesneo`,
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
    title: 'NeoCode',
    description: 'My attempt to create the coding platform I wish I had when starting DSA. Curated problem sheets, roadmaps, and a community where you can actually get help without feeling dumb.',
    image: '/assets/neocode.webp',
    link: 'https://neocoding.vercel.app',
    github: `${ghBase}/neocode`,
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  {
    title: 'NeoCompiler',
    description: 'Ever wanted to quickly test code without setting up your entire dev environment? This online compiler has your back! Multiple languages, themes, and even AI suggestions when you\'re stuck.',
    image: '/assets/neocompiler.webp',
    link: 'https://neocompiler.vercel.app',
    github: `${ghBase}/neo-compiler`,
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
      techStacks.shadcn,
    ],
  },
  {
    title: 'Portfolio',
    description: 'You\'re looking at it right now! 😉 This site went through like 5 redesigns before I was happy with it. Clean, responsive, and shows off my work while keeping things simple and professional.',
    image: '/assets/portfolio.webp',
    link: 'https://deepakmodi.vercel.app',
    github: `${ghBase}/portfolio`,
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
    title: 'Braineo',
    description: 'Learning shouldn\'t be boring! Built this AI-powered platform to make studying actually engaging instead of just memorizing stuff for exams. Interactive courses and quizzes.',
    image: '/assets/braineo.webp',
    link: 'https://braineo.vercel.app',
    github: `${ghBase}/braineo`,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.appwrite,
      techStacks.framer,
    ],
  },
  {
    title: 'Placify',
    description: 'Built this during placement season when I realized how chaotic the whole process was. A platform that actually makes job hunting on campus less stressful with proper job listings.',
    image: '/assets/placify.webp',
    github: `${ghBase}/placify`,
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.mongodb,
      techStacks.prisma,
    ],
  },
  {
    title: 'NeoFolio',
    description: 'Too lazy to build a custom portfolio? Don\'t have time to code? I got you! This is a clean, modern template that developers can easily customize without writing a single line of code.',
    image: '/assets/neofolio.webp',
    link: 'https://neofolio.vercel.app',
    github: `${ghBase}/neofolio`,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.firebase,
      techStacks.framer,
    ],
  },
  {
    title: 'Finneo',
    description: 'Investment advice shouldn\'t be rocket science! This AI-powered platform breaks down investing for beginners - just tell it your goals, risk tolerance, and budget, and you are good to go.',
    image: '/assets/finneo.webp',
    link: 'https://finneo.vercel.app',
    github: `${ghBase}/finneo`,
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
      techStacks.appwrite,
    ],
  },
  {
    title: 'Ajay Sharma',
    description: 'My first real freelance project! Built a landing page for Ajay Sharma, a self-empowerment coach. Clean design, clear pricing, and smooth payment integration for his coaching services.',
    image: '/assets/ajaysharma.webp',
    link: 'https://ajay-sharma.vercel.app',
    techStack: [
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (<SectionBackground>
    <section id="projects">
      <div className="container mx-auto px-8">
        <SectionTitle subtitle="My code babies - they're not perfect, but they're mine and I love them">Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  </SectionBackground>
  );
}
