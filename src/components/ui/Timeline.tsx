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
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800" />
          
          {/* Timeline Point */}
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-500" />
          
          {/* Timeline Card */}
          <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                {/* Icon */}
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Title */}
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
              
              {/* Company & Period */}
              <div className="text-gray-600 dark:text-gray-400 mb-2">
                {item.company} • {item.period}
              </div>
              
              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
