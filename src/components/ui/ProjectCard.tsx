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
    <div className="relative group">
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      {/* Card Content */}
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
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
        <div className="p-6">
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
    </div>
  );
}
