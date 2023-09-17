import { useState, createContext } from "react";
import "./App.css";
// import "./component/Footer/Footer.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import DsaSheet from "./pages/DsaSheet";
import LearnWebDev from "./pages/LearnWebDev";
import AllDsaSheets from "./pages/AllDsaSheets";
import Bookmarks from "./pages/Bookmarks";
import AllQuestionList from "./pages/AllQuestionList";
import YourSheetPage from "./pages/YourSheetPage";
import SignUpPage from "./component/SignUpPage/SignUpPage";
import LoginPage from "./component/LoginPage/LoginPage";
import Profile from "./pages/Profile";
import Protected from "./component/Protected";
import CardState from "./context/CardState";
import Card from "./component/Card/card";
import Roadmap from "./component/Roadmap/Roadmap";


export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    // <CardState>
    <Router>
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App">
      <div id={theme}>
      <Routes>
      <Route path="/" element={<Protected Component={Home} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/dsa" element={<Protected Component={DsaSheet} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/web-practice" element={<Protected Component={LearnWebDev} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/dsa/allSheets" element={<Protected Component={AllDsaSheets} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/dsa/YourSheet" element={<Protected Component={YourSheetPage} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/dsa/bookmark"  element={<Protected Component={Bookmarks} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/dsa/AllSheets/Questions/:qid"  element={<Protected Component={AllQuestionList} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/profile"  element={<Protected Component={Profile} theme={theme} toggleTheme={toggleTheme}/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/dsa/allSheets/topic/:id" element={<Card/>}/>
      <Route path="/webDev/roadmap" element={<Roadmap/>}/>
      </Routes>
      </div>
      </div>
    </ThemeContext.Provider>
    </Router>
    // </CardState>
  );
};

export default App;
