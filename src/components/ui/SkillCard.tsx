import React from 'react';

interface SkillCardProps {
  name: string;
  level: number;
}

export function SkillCard({ name, level }: SkillCardProps) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}