import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import LearnResources from "../component/LearnWebDev/LearnResources";

const LearnWebDev = ({toggleTheme, theme}) => {
  return (
    <div>
    <Navbar toggleTheme={toggleTheme} theme={theme}/>
    <LearnResources  />
    <Footer/>
    </div>
  )
}

export default LearnWebDev;
