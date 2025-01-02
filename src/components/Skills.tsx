import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { TechnicalSkills } from './skills/TechnicalSkills';
import { SoftSkills } from './skills/SoftSkills';
import { ScrollReveal } from './ui/ScrollReveal';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-8">
        <ScrollReveal>
          <SectionTitle>Skills</SectionTitle>
        </ScrollReveal>
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal animation="fade-up" delay={100}>
            <TechnicalSkills />
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <SoftSkills />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}