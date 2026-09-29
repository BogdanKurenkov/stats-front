import { type FC, createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { setCookie } from 'nookies';

import { colors, typography, breakpoints, ThemeMode } from '@/shared';

import { CustomThemeProviderProps, ThemeContextType } from './ThemeProvider.types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const CustomThemeProvider: FC<CustomThemeProviderProps> = ({
  children,
  initialMode
}) => {
  const [mode, setMode] = useState<ThemeMode>(initialMode || 'dark');

  const toggleTheme = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    setCookie(null, 'theme-mode', newMode, {
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      sameSite: 'strict',
    });
  };

  const currentColors = mode === 'dark' ? colors.dark : colors.light;

  const theme = {
    mode,
    typography,
    breakpoints,
    colors: {
      orange: colors.orange,
      black: currentColors.black,
      gray: currentColors.gray,
      status: currentColors.status,
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};