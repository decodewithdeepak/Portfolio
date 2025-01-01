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
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-xl overflow-hidden group backdrop-blur-md">
      {/* Gradient Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 pointer-events-none" />

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {/* External Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
          >
            <ExternalLink className="w-6 h-6 text-white hover:text-white transition-colors" />
          </a>
          {/* GitHub Link */}
          <a
            href={`https://github.com/deepakmodi/${title.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/20 rounded-full hover:bg-gray-900 hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
          >
            <Github className="w-6 h-6 text-white hover:text-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full shadow-sm transition-transform duration-300 hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
