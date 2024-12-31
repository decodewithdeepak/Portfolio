import React from 'react';
import { Code2, Database, Globe, Terminal } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiCplusplus } from 'react-icons/si';
import { SkillCard } from '../ui/SkillCard';

const technicalSkills = [
  {
    name: 'React',
    icon: FaReact,
    category: 'Frontend',
    description: 'Building modern and responsive user interfaces with React and its ecosystem.',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    category: 'Backend',
    description: 'Developing scalable server-side applications and REST APIs.',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    category: 'Language',
    description: 'Writing type-safe code for better maintainability and developer experience.',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    category: 'Database',
    description: 'Working with NoSQL databases for flexible data storage solutions.',
  },
  {
    name: 'Python',
    icon: FaPython,
    category: 'Language',
    description: 'Data analysis, automation, and backend development with Python.',
  },
  {
    name: 'Java',
    icon: FaJava,
    category: 'Language',
    description: 'Object-oriented programming and enterprise application development.',
  },
];

export function TechnicalSkills() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}