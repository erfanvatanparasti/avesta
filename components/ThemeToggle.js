'use client';

import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle(props) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering only on client
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
     new DotWave({
      container: '#main',
      dotColor: localStorage.theme === "light"? "#000000A0" : '#ffffffA0',
      backgroundColor: 'transparent',
      numDots: 50,
      dotMinSize: 1,
      dotMaxSize: 2,
      randomFactor: 0.1,
      dotStretch: false,
      rotSmoothing: false,
      reactive: true
    });
  }, [theme]);

  if (!mounted) {
    return null; // Or a placeholder
  }

  return (
    <button onClick={() => toggleTheme(theme => theme === 'dark' ? 'light' : 'dark')} className={`${props.className} transition`}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}