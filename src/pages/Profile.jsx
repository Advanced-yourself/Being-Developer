import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import Form from '../component/userProfile/Form';


const Profile = ({toggleTheme, theme}) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Profile;
