'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function VantaCDN({ children }) {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
    const { theme } = useTheme();
    

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });

    const initVanta = async () => {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js');

      if (window.VANTA && window.VANTA.NET && window.THREE) {
        if (vantaEffect) vantaEffect.destroy();

        const isDark = theme === 'dark';

        const effect = window.VANTA.NET({
          el: vantaRef.current,
          THREE: window.THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: isDark ? 0xffffff : 0x000000,
          backgroundColor: isDark ? 0x000000 : 0xffffff,
          spacing: 14.0,
        });

        setVantaEffect(effect);
      }
    };

    if (theme) {
      initVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [theme]);

  return (
    <div ref={vantaRef} className="w-full min-h-[85vh] relative">
      <div className="relative z-10">{children}</div>
    </div>
  );
}