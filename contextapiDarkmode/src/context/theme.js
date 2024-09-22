import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "Dark",
  lightTheme: () => {},
  darkTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
