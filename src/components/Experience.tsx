import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'TechCorp Solutions',
    period: 'Jun 2023 - Present',
    description: 'Developing and maintaining web applications using MERN stack. Implemented key features that improved user engagement by 40%.',
  },
  {
    title: 'Web Development Lead',
    company: 'College Tech Club',
    period: 'Aug 2022 - May 2023',
    description: 'Led a team of 5 developers in creating the college event management platform. Mentored junior developers in web technologies.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}