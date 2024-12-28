import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
          >
            <ExternalLink className="w-6 h-6 text-white" />
          </a>
          <a
            href={`https://github.com/deepakmodi/${title.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}