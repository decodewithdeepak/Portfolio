import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import { ScrollReveal } from './ui/ScrollReveal';

const projects = [
  {
    title: 'NotesNeo',
    description: 'A comprehensive semester notes platform for students',
    image: '/assets/notesneo.png',
    link: 'https://notesneo.vercel.app',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'NeoCode',
    description: 'DSA sheet management and tracking platform',
    image: '/assets/neocode.png',
    link: 'https://neocoding.vercel.app',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects and skills',
    image: '/assets/portfolio.png',
    link: 'https://deepakmodi.netlify.app',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <SectionTitle>Projects</SectionTitle>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={project.title} 
              animation="fade-up" 
              delay={100 * (index + 1)}
            >
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}