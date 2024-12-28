import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export function EducationCard({ degree, institution, period, score }: EducationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{degree}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">{institution}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <span>{period}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            <span>Score: {score}</span>
          </div>
        </div>
      </div>
    </div>
  );
}