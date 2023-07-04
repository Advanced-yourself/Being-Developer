import { useState, createContext } from "react";
import "./App.css";
import "./component/Footer/Footer.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import DsaSheet from "./pages/DsaSheet";
import LearnWebDev from "./pages/LearnWebDev";
import Login from "./pages/Login";
import AllDsaSheets from "./pages/AllDsaSheets";
import Bookmarks from "./pages/Bookmarks";
import AllQuestionList from "./pages/AllQuestionList";
import YourSheetPage from "./pages/YourSheetPage";


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
      <Route path="/dsa" element={<DsaSheet toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/web-practice" element={<LearnWebDev toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/dsa/allSheets" element={<AllDsaSheets  toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/dsa/YourSheet" element={<YourSheetPage toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/dsa/bookmark"  element={<Bookmarks toggleTheme={toggleTheme} theme={theme}/>}/>
      <Route path="/dsa/AllSheets/AllQuestions"  element={<AllQuestionList/>}/>
      <Route path="login" element={<Login/>}/>
      </Routes>
      </div>
      </div>
    </ThemeContext.Provider>
    </Router>
  );
};

export default App;
