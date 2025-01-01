import { useState, useEffect } from 'react';

export function useTheme() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [isDark, setIsDark] = useState(getInitialTheme() === 'dark');

  useEffect(() => {
    // Apply theme on mount and theme change
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, setIsDark };
}