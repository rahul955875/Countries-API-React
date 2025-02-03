import { useContext } from "react";
import { createThemeContext } from "../Contexts/ThemeContext";

export const useTheme = () => useContext(createThemeContext)