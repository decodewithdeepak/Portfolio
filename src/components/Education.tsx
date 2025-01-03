import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'St. Andrews Institute of Technology and Management, Gurgaon',
    period: '2022 - 2026',
    score: '80%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'Inter Science College, Hazaribagh',
    period: '2019 - 2021',
    score: '88%',
  },
  {
    degree: 'Secondary (X)',
    institution: 'St. Paul\'s School, Hazaribagh',
    period: '2017 - 2019',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}