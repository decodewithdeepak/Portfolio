import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Timeline } from './ui/Timeline';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Cyberxield Solutions',
    period: 'Jan 2024 - Feb 2024',
    description: 'Developing and maintaining web applications using MERN stack. Implemented key features that improved user engagement by 40%.',
  },
  {
    title: 'Web Development Lead',
    company: 'College Tech Club',
    period: 'Aug 2024 - Present',
    description: 'Led a team of 4 developers in creating the college event management platform. Mentored junior developers in web technologies.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <Timeline items={experiences} />
      </div>
    </section>
  );
}