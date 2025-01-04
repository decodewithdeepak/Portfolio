import React from 'react';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  category: string;
  description: string;
}

export function SkillCard({ name, icon: Icon, category, description }: SkillCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          {/* Icon Container */}
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
