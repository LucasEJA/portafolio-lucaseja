import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';

// Crear el contexto
const ThemeContext = createContext();

// Hook para usar el contexto
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext debe usarse dentro de un ThemeProvider');
  }
  return context;
};

// Provider del tema
export const ThemeProvider = ({ children }) => {
  const themeValues = useTheme();

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};