'use client'; // this marks the component to run only in the browser

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from "@/components/ui/switch"


const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Once mounted, set the state to avoid SSR mismatch
    setMounted(true);
  }, []);

  // If not mounted, return null to prevent rendering until after hydration
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded dark:border-white border-black"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;
