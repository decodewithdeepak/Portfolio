import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export function AboutCard({ icon: Icon, title, description, color }: AboutCardProps) {
  return (
    <div className="relative group">
      <div
        className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-30 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4 space-x-4">
          <div className={`p-3 ${color} rounded-lg w-fit`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
}
