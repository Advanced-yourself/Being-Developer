import {useState} from "react";
import "./LoginPage.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit=(e)=> {
       e.preventDefault();
       axios.post("http://localhost:5100/api/auth/login",{email, password})
       .then(res=> {
        console.log(res);
        const token = res.data.token;
        const message = res.data.message;
        if(token){
          localStorage.setItem("loginToken", token);
          window.alert("Login Successful");
          navigate("/");
        }
        else if(message === 'All fields are required')
        {
          window.alert("All fields are required");
        }
        else {

          window.alert("Invalid Credentials. Either email or password is wrong");
        }

        
      })
       .catch(err=> {console.log(err)})
  }


  return (
    <>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Login</h1>
          </header>
          <main className="signup-body">
            <form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@gmail.com"
                  onChange={(e)=> setEmail(e.target.value)}
                  
                />
              </p>
              <p>
                <label htmlFor="password">Please Enter Your Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="at least 5 characters"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </p>
          <p style={{textAlign:"center"}}>&nbsp; <Link to="/ForgetPassword">Forget Password?</Link></p>
              <p>
                <input type="submit" id="submit" defaultValue="Login" />
              </p>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
