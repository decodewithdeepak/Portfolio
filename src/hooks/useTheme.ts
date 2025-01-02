import { useState, useEffect } from 'react';

export function useTheme() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [isDark, setIsDark] = useState(getInitialTheme() === 'dark');

  useEffect(() => {
    // Apply theme to document early to avoid flash of light mode
    document.documentElement.classList.toggle('dark', isDark);
    // Save the theme preference to localStorage for future visits
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Update body background color immediately after theme change to prevent lag
  useEffect(() => {
    const root = document.documentElement;
    root.style.transition = 'background-color 0.5s ease'; // Smooth transition for background-color
  }, []);

  return { isDark, setIsDark };
}
