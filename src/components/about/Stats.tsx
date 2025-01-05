import React from 'react';
import { Code2, Coffee, Users } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatItem({ icon, value, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-blue-600 dark:text-blue-400 mb-2">
        {icon}
        </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-sm text-center text-gray-600 dark:text-gray-400">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
      <StatItem
        icon={<Code2 className="w-6 h-6" />}
        value="10+"
        label="Projects Completed"
      />
      <StatItem
        icon={<Coffee className="w-6 h-6" />}
        value="1000+"
        label="Cups of Coffee"
      />
      <StatItem
        icon={<Users className="w-6 h-6" />}
        value="50+"
        label="Happy Clients"
      />
    </div>
  );
}
