import React, { useContext, useEffect, useState } from 'react';
import { ChangeTheme } from '../../utils/ChangeTheme';
import { THEME_NEITRAL } from './ThemeConstants';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage';


const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    //загружаем тему из lStor. или используем тему THEME_NEITRAL
    const [theme, setTheme] = useState(() => {
        const savedTheme = getLocalStorage('theme'); 

        return savedTheme || THEME_NEITRAL;
    });

    const change = (name) => {
        setTheme(name);
        setLocalStorage('theme', name);
    }

    useEffect(() => {
        ChangeTheme(theme);
    }, [theme])


    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                change: change,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);