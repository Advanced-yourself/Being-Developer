
import ArrayQuestion from '../component/SheeetsQuestion/SheetsQuestion';
import DsaNavbar from "../component/Dsa_Nav/DsaNavbar";
import Footer from "../component/Footer/Footer";


const AllQuestionList = ({toggleTheme,theme}) => {
  return (
    <div>
       <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
      <ArrayQuestion toggleTheme={toggleTheme} theme={theme}/>
      <Footer toggleTheme={toggleTheme} theme={theme}/>
    </div>
  )
}

export default AllQuestionList
