import { useState } from 'react';
import './SignUpPage.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../config';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPass] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log('Signup Button Clicked');
    e.preventDefault();
  
    // Check if any of the input fields is empty
    if (!name || !email || !password || !password_confirmation) {
      window.alert('All fields are required');
      return;
    }

    if (password !== password_confirmation) {
      window.alert('Password and Confirm Password do not match');
      return;
    }
  
    setLoading(true); // Set loading to true on form submission
  
    axios
      .post(`${BASE_URL}api/auth/registeruser`, {
        name,
        email,
        password,
        password_confirmation,
      })
      .then((res) => {
        console.log('Show me signup data', res);
        navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false); // Set loading back to false when the request is complete
      });
  };
  

  return (
    <>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Signup</h1>
          </header>
          <main className="signup-body">
            <form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Bill Gates"
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </p>
              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="billgates@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </p>
              <p>
                <label htmlFor="password">Your New Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="at least 5 characters"
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </p>

              <p>
                <label htmlFor="password-confirmation">Confirm Password</label>
                <input
                  type="password"
                  id="password-confirmation"
                  placeholder="Enter password again"
                  required=""
                  onChange={(e) => setConfirmPass(e.target.value)}
                  disabled={loading}
                />
              </p>
              <p>
                {loading ? (
                  <button className='Submitbtn' type="submit" id="submit" disabled>
                    Creating Account...
                  </button>
                ) : (
                  <button  className = "Submitbtn" type="submit" id="submit">
                    Create Account
                  </button>
                )}
              </p>
            </form>
          </main>
          <footer className="signup-footer">
            <p>
              Already have an Account? <Link to="/login"> <a href="#">Login</a> </Link>{' '}
            </p>
          </footer>
        </div>
        <div className="circle c1" />
        <div className="circle c2" />
      </div>
    </>
  );
};

export default SignUpPage;
