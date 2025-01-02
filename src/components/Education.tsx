import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';
import { ScrollReveal } from './ui/ScrollReveal';

const education = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'St. Andrews Institute of Technology and Management',
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
    institution: 'St. Pauls School, Hazaribagh',
    period: '2017 - 2019',
    score: '85.6%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <SectionTitle>Education</SectionTitle>
        </ScrollReveal>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal 
              key={edu.degree} 
              animation="fade-left" 
              delay={100 * (index + 1)}
            >
              <EducationCard {...edu} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}