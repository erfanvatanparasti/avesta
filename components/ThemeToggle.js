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

  if (!mounted) {
    return null; // Or a placeholder
  }

  return (
    <button onClick={() => toggleTheme(theme => theme === 'dark' ? 'light' : 'dark')} className={`${props.className} transition`}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}