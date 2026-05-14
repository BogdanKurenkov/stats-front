// application/providers/ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { parseCookies, setCookie } from 'nookies';
import { colors } from '@/shared/styles/colors';
import { typography } from '@/shared/styles/typography';
import { breakpoints } from '@/shared/styles/breakpoints';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

interface CustomThemeProviderProps {
    children: React.ReactNode;
    initialMode?: ThemeMode;
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
    children,
    initialMode
}) => {
    const [mode, setMode] = useState<ThemeMode>(initialMode || 'dark');
    const [mounted, setMounted] = useState(false);

    // После монтирования проверяем cookie
    useEffect(() => {
        setMounted(true);
        const cookies = parseCookies();
        const savedTheme = cookies['theme-mode'] as ThemeMode;

        if (savedTheme === 'light' || savedTheme === 'dark') {
            setMode(savedTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        // Сохраняем в cookie
        setCookie(null, 'theme-mode', newMode, {
            maxAge: 365 * 24 * 60 * 60, // 1 год
            path: '/',
            sameSite: 'strict',
        });
    };

    // Получаем текущие цвета
    const currentColors = mode === 'dark' ? colors.dark : colors.light;

    // Создаем тему с правильной структурой
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

    // Предотвращаем гидратацию
    if (!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};