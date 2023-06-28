import Navbar from "../component/Navbar/Navbar";
import Learn from "../component/Learn/Learn";
import DsaFooter from "../component/DsaFooter/DsaFooter";

const Home = ({toggleTheme, theme}) => {
  return (
    <div className='Home'>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Learn/>
        <DsaFooter/>
    </div>
  )
}

export default Home;
