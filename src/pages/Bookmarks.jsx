
import DsaNavbar from '../component/Dsa_Nav/DsaNavbar';
import Bookmark from '../component/Bookmark/Bookmark';
import Footer from '../component/Footer/Footer';

const Bookmarks = ({toggleTheme, theme}) => {
  return (
    <>
      <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
      <Bookmark/>
      <Footer/>
    </>
  )
}

export default Bookmarks;
