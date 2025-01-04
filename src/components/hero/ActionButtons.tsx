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
      className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base ${
        primary
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'text-blue-600 dark:text-blue-400 border-2 border-blue-600'
      } transition-transform duration-300 transform hover:scale-105`}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </Component>
  );
}

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center sm:justify-start">
      <ActionButton
        href="/assets/Deepak_Modi_Resume.pdf"
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
