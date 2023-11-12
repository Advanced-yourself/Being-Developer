import Navbar from "../component/Navbar/Navbar";
import Learn from "../component/Learn/Learn";
import Footer from "../component/Footer/Footer";

const Home = ({toggleTheme, theme}) => {
  return (
    <>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Learn/>
        <Footer/>
    </>
  )
}

export default Home;
