import React, { createContext, useState } from "react";
export const createThemeContext = createContext();

function ThemeContext({ children }) {
  // console.log(children)
  const [isDark, setisDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );
  return (
    <createThemeContext.Provider value={[isDark, setisDark]}>
      {children}
    </createThemeContext.Provider>
  );
}

export default ThemeContext;
