import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  primary?: boolean;
}

function ActionButton({ href, icon, text, primary = false }: ActionButtonProps) {
  const Component = href.startsWith('#') ? Link : 'a';
  return (
    <Component
      href={href}
      className={`group relative overflow-hidden px-4 py-2 sm:px-6 sm:py-3 rounded-md flex items-center gap-2 font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative">{icon}</span>
      <span className="relative">{text}</span>
    </Component>
  );
}

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center sm:justify-start">
      <ActionButton
        href="/resume.pdf"
        icon={<FileText className="w-5 h-5 sm:w-6 sm:h-6" />}
        text="View Resume"
        primary
      />
      <ActionButton
        href="#contact"
        icon={<Mail className="w-5 h-5 sm:w-6 sm:h-6" />}
        text="Contact Me"
      />
    </div>
  );
}
