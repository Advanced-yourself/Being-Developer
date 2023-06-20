import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Learn from "../component/Learn/Learn";

const Home = ({toggleTheme, theme}) => {
  return (
    <div className='Home'>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Learn/>
        <Footer />
    </div>
  )
}

export default Home;
