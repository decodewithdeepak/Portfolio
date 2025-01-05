import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { useLoading } from './hooks/useLoading';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isLoading = useLoading();

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div
        className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
        <Analytics /> {/* Add Analytics here */}
      </div>
    </>
  );
}

export default App;