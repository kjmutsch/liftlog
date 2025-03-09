import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const lightTheme = {
  background: '#F5F5F5',
  card: '#FFFFFF',
  primary: '#0072CE',
  accent: '#E69F00',
  text: '#212121',
  secondaryText: '#757575',
  success: '#009E73',
  error: '#D55E00',
};

const darkTheme = {
  background: '#121212',
  card: '#1E1E1E',
  primary: '#56B4E9',
  accent: '#E69F00',
  text: '#E0E0E0',
  secondaryText: '#A0A0A0',
  success: '#009E73',
  error: '#D55E00',
};

const ThemeContext = createContext(lightTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
