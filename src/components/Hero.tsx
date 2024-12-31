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
    "Lifelong Learner",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-8 py-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Right Column - Profile Image */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <img
              src="/assets/profile.png"
              alt="Deepak Modi"
              className="relative w-full max-w-lg md:max-w-lg mx-auto rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Left Column */}
          <div className="order-2 md:order-1 text-center space-y-6">
            <div className="space-y-2">
              <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                Hey! 👋 I'm
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Deepak Modi
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 h-8">
                I'm a <TypeWriter words={roles} delay={100} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 mb-8">
              <a
                href="tel:+918676842176"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +91 8676842176
              </a>
              <a
                href="mailto:contact@deepakmodi.dev"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                contact@deepakmodi.dev
              </a>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5" />
                Gurgaon, India
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 justify-center">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-2 border-blue-600 text-blue-600 bg-white hover:bg-blue-600 hover:text-white dark:border-blue-600 dark:text-blue-400 dark:bg-transparent dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Link>
            </div>

            <div className="flex gap-8 justify-center">
              {/* Social Links */}
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
        </div>

        <div className="absolute bottom-[-2rem] left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Link>
        </div>


      </div>
    </section>
  );
}
