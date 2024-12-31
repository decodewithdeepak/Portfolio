import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  infinite?: boolean;
}

export function TypeWriter({ words, delay = 100, infinite = true }: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => 
            infinite ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay, infinite]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}