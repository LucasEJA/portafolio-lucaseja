import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Intentar obtener el tema del localStorage, por defecto 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (savedTheme) {
        return savedTheme;
      }
      
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Aplicar el tema al documento
  useEffect(() => {
    const root = document.documentElement;
    
    // Remover tema anterior
    root.removeAttribute('data-theme');
    
    // Aplicar nuevo tema
    root.setAttribute('data-theme', theme);
    
    // Guardar en localStorage
    localStorage.setItem('portfolio-theme', theme);
    
    // Opcional: Actualizar meta theme-color para móviles
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content', 
        theme === 'dark' ? '#0f172a' : '#f8fafc'
      );
    }
  }, [theme]);

  // Función para cambiar tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Función para establecer tema específico
  const setSpecificTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setTheme(newTheme);
    }
  };

  // Detectar cambios en la preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Solo cambiar automáticamente si no hay una preferencia guardada
      const savedTheme = localStorage.getItem('portfolio-theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    theme,
    toggleTheme,
    setSpecificTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light'
  };
};