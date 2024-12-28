import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { CertificationCard } from './ui/CertificationCard';

const certifications = [
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'Dec 2023',
    link: 'https://www.coursera.org/verify/123456',
  },
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Nov 2023',
    link: 'https://www.linkedin.com/learning/123456',
  },
  {
    title: 'Python 3 Ultimate Guide',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: 'https://www.udemy.com/certificate/123456',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}