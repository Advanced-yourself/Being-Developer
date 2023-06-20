import { useState, createContext } from "react";
import "./App.css";
import "./component/Footer/Footer.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import DsaSheet from "./pages/DsaSheet";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Router>
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App">
      <div id={theme}>
      <Routes>
      <Route path="/" element={<Home toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/dsa" element={<DsaSheet/>}/>
      </Routes>
      </div>
      </div>
    </ThemeContext.Provider>
    </Router>
  );
};

export default App;
