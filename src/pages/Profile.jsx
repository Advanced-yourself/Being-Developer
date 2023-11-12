import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Form from '../component/Profile/Profile';


const Profile = ({toggleTheme, theme}) => {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Profile;
