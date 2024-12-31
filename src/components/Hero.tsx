import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, FileText, ArrowDown, Instagram, Twitter, Youtube } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';

export function Hero() {
  const roles = [
    "Full-Stack Developer",
    "DSA Enthusiast",
    "Problem Solver",
    "Tech Innovator",
    "Lifelong Learner"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 text-lg font-medium"> Hey! 👋 I'm </p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Deepak Modi
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+918676842176" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-105">
                <Phone className="w-5 h-5" />
                +91 8676842176
              </a>
              <a href="mailto:contact@deepakmodi.dev" 
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-105">
                <Mail className="w-5 h-5" />
                contact@deepakmodi.dev
              </a>
              <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                Gurgaon, India
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/918676842176"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/deepakmodi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/profile.png"
              alt="Deepak Modi"
              className="relative w-full max-w-lg md:max-w-xl mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}