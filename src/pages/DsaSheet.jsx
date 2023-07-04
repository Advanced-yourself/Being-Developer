import DsaHome from "../component/Dsa_Home/DsaHome";
import DsaNavbar from "../component/Dsa_Nav/DsaNavbar";
import Footer from "../component/Footer/Footer";

const DsaSheet = ({toggleTheme, theme}) => {
  
  return (
    <div>
      <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
      <DsaHome toggleTheme={toggleTheme} theme={theme}/>
      <Footer/>
    </div>
  )
}

export default DsaSheet;
