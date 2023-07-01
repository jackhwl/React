import { createContext } from "react";
import useTheme from "../components/hocs/useTheme";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const value = useTheme();
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
