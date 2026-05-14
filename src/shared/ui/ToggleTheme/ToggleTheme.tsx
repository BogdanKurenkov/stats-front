import type { FC } from 'react';

import { useTheme } from '@/application/providers/ThemeProvider/ThemeProvider';

import { ToggleButton, Icon, Knob } from './ToggleTheme.styled';

export const ToggleTheme: FC = () => {
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === 'dark';

  return (
    <ToggleButton onClick={toggleTheme} $isDark={isDark}>
      <Knob $isDark={isDark}>
        <Icon>{isDark ? '🌙' : '☀️'}</Icon>
      </Knob>
    </ToggleButton>
  );
};