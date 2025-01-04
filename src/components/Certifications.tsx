import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { CertificationCard } from './ui/CertificationCard';

const certifications = [
  {
    title: 'Technical Support Fundamentals',
    issuer: 'Google',
    date: 'Dec 2023',
    link: 'https://coursera.org/share/293a4f79250a4dfdf7ed8174d8538e7b',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Generative AI',
    issuer: 'Microsoft & LinkedIn',
    date: 'Nov 2023',
    link: 'https://www.linkedin.com/learning/certificates/4b0455567c3cfda25e8ef1896c3639f05112af66ace4292ed1004466ef830c94?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bbq8LdPJvRzi4K%2BpLPeklnQ%3D%3D',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Python 3 Ultimate Guide',
    issuer: 'Udemy',
    date: 'Oct 2023',
    link: 'https://www.udemy.com/certificate/UC-35cedd32-ccc1-4377-b9ef-e8fabda1f457/',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}