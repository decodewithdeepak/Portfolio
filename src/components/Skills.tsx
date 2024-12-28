import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SkillCard } from './ui/SkillCard';

const technicalSkills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TypeScript', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 70 },
  { name: 'C++', level: 75 },
  { name: 'SQL', level: 80 },
];

const softSkills = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Time Management', level: 85 },
  { name: 'Communication', level: 80 },
  { name: 'Leadership', level: 75 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Skills</SectionTitle>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}