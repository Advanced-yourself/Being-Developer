import JavaScriptRoadmap from '../component/JavaScriptRoadmap/JavaScriptRoadmap'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
const JavaScriptRoadmapPage = ({toggleTheme, theme}) => {
  return (
    <div>
      <Navbar  toggleTheme={toggleTheme} theme={theme}></Navbar>
      <JavaScriptRoadmap></JavaScriptRoadmap>
      <Footer></Footer>
    </div>
  )
}

export default JavaScriptRoadmapPage;
