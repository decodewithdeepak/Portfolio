import React from 'react';
import { Brain, Clock, MessageSquare, Users } from 'lucide-react';
import { SkillCard } from '../ui/SkillCard';

const softSkills = [
  {
    name: 'Problem Solving',
    icon: Brain,
    category: 'Analytical',
    description: 'Breaking down complex problems into manageable solutions.',
  },
  {
    name: 'Time Management',
    icon: Clock,
    category: 'Organization',
    description: 'Efficiently managing tasks and meeting project deadlines.',
  },
  {
    name: 'Communication',
    icon: MessageSquare,
    category: 'Interpersonal',
    description: 'Clear and effective communication with team members.',
  },
  {
    name: 'Leadership',
    icon: Users,
    category: 'Management',
    description: 'Leading teams and mentoring junior developers.',
  },
];

export function SoftSkills() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {softSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}