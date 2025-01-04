import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:deepakmodi8676@gmail.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
                <span>deepakmodi8676@gmail.com</span>
              </a>
              <a
                href="https://github.com/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
                <span>github.com/decodewithdeepak</span>
              </a>
              <a
                href="https://linkedin.com/in/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
                <span>linkedin.com/in/deepakmodi1</span>
              </a>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
