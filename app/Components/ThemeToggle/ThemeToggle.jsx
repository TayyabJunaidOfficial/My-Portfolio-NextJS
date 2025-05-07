"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {FiMoon,FiSun} from 'react-icons/fi'


const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    setmounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="cursor-pointer relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-1000"
      >
        {theme === "dark" ? (
          <FiSun className="text-yellow-400 w-5 h-5" />
        ) : (
          <FiMoon className="text-gray-700 w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
