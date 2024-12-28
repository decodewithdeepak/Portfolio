import React from 'react';
import { Briefcase } from 'lucide-react';

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 last:pb-0">
          <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800" />
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500" />
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-2">
              {item.company} • {item.period}
            </div>
            <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}