import { useState } from 'react';
import './SignUpPage.css';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {

     const [name, setName] = useState();
     const [email, setEmail] = useState();
     const [password, setPassword] = useState();
     const [password_confirmation, setConfirmPass] = useState();
     const navigate = useNavigate();
     



     const handleSubmit=(e)=> {
      e.preventDefault();  
      axios.post("http://localhost:5100/api/auth/registeruser", {name,email,password, password_confirmation})
      .then(res=> {
        console.log("Show me signup data",res);
        navigate("/login")
      })
      .catch(err=> {
        console.log(err);
      })
     }


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
                  onChange={(e)=> setName(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="billgates@gmail.com"
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </p>
              <p>
                <label htmlFor="password">Your New Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="at least 5 characters"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </p>

              <p>
                <label htmlFor="password-confirmation">Confirm Password</label>
                <input
                  type="password"
                  id="password-confirmation"
                  placeholder="Enter password again"
                  required=""
                  onChange={(e)=> setConfirmPass(e.target.value)}
                />
              </p>
              <p>
                <input
                  type="submit"
                  id="submit"
                  defaultValue="Create Account"
                />
              </p>
            </form>
          </main>
          <footer className="signup-footer">
          {/* <Link to="/dsa">
          <button className="learn-btn">Data Structures & Algorithms</button>
          </Link> */}
            <p>
              Already have an Account? <Link to = "/login"> <a href="#">Login</a> </Link>{" "}
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
