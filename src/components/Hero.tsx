import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, FileText, ArrowDown, Instagram, Twitter, Youtube, MessageCircleHeart } from 'lucide-react'; // Import MessageCircleHeart from lucide-react
import { Link } from './Link';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Deepak Modi
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full-Stack Developer | DSA Enthusiast | Lifelong Learner
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="tel:+918676842176" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                <Phone className="w-5 h-5" />
                +91 8676842176
              </a>
              <a href="mailto:contact@deepakmodi.dev" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
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
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <FileText className="w-5 h-5" />
                View Resume
              </a>
              <Link
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
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
              {/* Added social media icons with hover effects */}
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
              {/* Use MessageCircleHeart for WhatsApp icon */}
              <a
                href="https://wa.me/918676842176"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all transform hover:scale-110"
              >
                <MessageCircleHeart className="w-6 h-6" />
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
            <img
              src="/assets/profile.png" // https://deepakmodi.netlify.app/assets/main.png
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
