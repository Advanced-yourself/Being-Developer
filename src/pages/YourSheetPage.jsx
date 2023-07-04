import DsaNavbar from "../component/Dsa_Nav/DsaNavbar";
import Footer from "../component/Footer/Footer";
import YourSheet from "../component/YourSheet/YourSheet";


const YourSheetPage = ({toggleTheme, theme}) => {
  return (
    <div>
    <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
    <YourSheet toggleTheme={toggleTheme} theme={theme}/>
    <Footer/>
    </div>
  )
}

export default YourSheetPage;
