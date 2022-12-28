import { useContext, useState, createContext, useCallback } from 'react';

const ThemeModeContext = createContext();
const ThemeModeUpdateContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }, [setDarkTheme]);

  return (
    <ThemeModeContext.Provider value={darkTheme}>
      <ThemeModeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeModeUpdateContext.Provider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeModeContext = () => {
  return useContext(ThemeModeContext);
};

export const useThemeModeUpdateContext = () => {
  return useContext(ThemeModeUpdateContext);
};

export default ThemeModeProvider;
