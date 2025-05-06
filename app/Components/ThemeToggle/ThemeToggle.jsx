'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This will make sure the component is mounted before making any changes
    setMounted(true);
  }, []);

  // Don't render anything until the component is mounted on the client
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
    >
      {theme === 'dark' ? (
        <FiSun className="text-yellow-400 w-5 h-5" />
      ) : (
        <FiMoon className="text-gray-700 w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
