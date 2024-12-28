import React from 'react';
import { Code2, Brain, Trophy } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              I'm a passionate Full-Stack Developer and final-year Computer Science Engineering student, 
              dedicated to creating efficient and scalable web solutions. With a strong foundation in 
              Data Structures and Algorithms, I approach each project with a problem-solving mindset.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Currently pursuing my B.Tech in Computer Science Engineering with an impressive academic 
              record, maintaining an 80% average while actively contributing to open-source projects 
              and building web applications.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Full-Stack Development</h3>
                <p className="text-gray-600 dark:text-gray-300">Specialized in MERN stack with TypeScript</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">Strong DSA background with competitive programming</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Achievements</h3>
                <p className="text-gray-600 dark:text-gray-300">Multiple certifications and academic excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}