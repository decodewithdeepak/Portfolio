import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Link } from './Link';
import { useTheme } from '../hooks/useTheme';
import { ThemeToggle } from './ui/ThemeToggle';
import { useAnimatedLogo } from '../hooks/useAnimatedLogo';
import { LoadingScreen } from './loading/LoadingScreen';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const { isDark, setIsDark } = useTheme();
  const { isLogoAnimating, handleLogoClick } = useAnimatedLogo();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <LoadingScreen isLoading={isLogoAnimating} />
      <nav
        className={`fixed w-full z-50 transition-all duration-150 ease-in-out ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with click handler */}
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={handleLogoClick}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DM
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-105 hover:border-b-2 hover:border-blue-600 dark:hover:border-blue-400 ${
                    activeLink === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <a
                href="/assets/Deepak_Modi_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                download
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-md hover:border-b-2 hover:border-blue-600 dark:hover:border-blue-400 ${
                    activeLink === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                  }`}
                  onClick={() => {
                    setActiveLink(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/assets/Deepak_Modi_Resume.pdf"
                className="flex items-center justify-center gap-2 mx-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                download
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
