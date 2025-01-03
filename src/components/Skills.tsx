import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { TechnicalSkills } from './skills/TechnicalSkills';
import { SoftSkills } from './skills/SoftSkills';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          <TechnicalSkills />
          <SoftSkills />
        </div>
      </div>
    </section>
  );
}