import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 rounded-lg bg-white/5 dark:bg-gray-800/5 backdrop-blur-3xl border border-gray-200/10 dark:border-gray-700/10 ${
        href ? 'hover:scale-105 hover:bg-white/10 dark:hover:bg-gray-800/10' : ''
      } transition-all duration-300`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text="+91 8676842176"
        href="tel:+918676842176"
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="contact@deepakmodi.dev"
        href="mailto:contact@deepakmodi.dev"
      />
      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text="Gurgaon, India"
      />
    </div>
  );
}