import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export function CertificationCard({ title, issuer, date, link }: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold mb-1">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{issuer}</p>
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">{date}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
          >
            Verify <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}