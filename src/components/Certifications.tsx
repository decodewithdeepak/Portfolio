import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { CertificationCard } from './ui/CertificationCard';
import { ScrollReveal } from './ui/ScrollReveal';

const certifications = [
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'Dec 2023',
    link: 'https://www.coursera.org/verify/123456',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Nov 2023',
    link: 'https://www.linkedin.com/learning/123456',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Python 3 Ultimate Guide',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: 'https://www.udemy.com/certificate/123456',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <SectionTitle>Certifications</SectionTitle>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <ScrollReveal 
              key={cert.title} 
              animation="zoom" 
              delay={100 * (index + 1)}
            >
              <CertificationCard {...cert} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}