import{ createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.style.backgroundColor = darkMode ? "#fafafa" : "#121212";
  };

  return (
    <AppContext.Provider
      value={{ searchQuery, setSearchQuery, darkMode, toggleDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
