import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the themes
const themes = {
    light: {
        background: '#ffffff',
        color: '#000000',
    },
    dark: {
        background: '#222222',
        color: '#ffffff',
    },
};

// Create a Context for the theme
const ThemeContext = createContext();

// Create a custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? JSON.parse(storedTheme) : themes.light;
    });

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === themes.light ? themes.dark : themes.light;
            localStorage.setItem('theme', JSON.stringify(newTheme));
            return newTheme;
        });
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(JSON.parse(storedTheme));
        }
    }, []); // Empty dependency array to run only once on component mount

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Theme switcher component
export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className='wrapper'
            style={{
                background: theme.background,
                color: theme.color,
                padding: '20px',
                marginTop: '20px',
                height: "50vh"
            }}>
            <h1>Theme Switcher Example</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div
                style={{ margin: '20px' }}
            >
                This is a themed component. Change the theme using the button above.
            </div>
        </div>
    );
};
