
import DsaNavbar from '../component/Dsa_Nav/DsaNavbar';
import Bookmark from '../component/Bookmark/Bookmark';
import Footer from '../component/Footer/Footer';

const Bookmarks = ({toggleTheme, theme}) => {
  return (
    <div>
      <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
      <Bookmark/>
      <Footer/>
    </div>
  )
}

export default Bookmarks;
