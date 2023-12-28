import { useState } from "react";
import "./LoginPage.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password && !email) {
      window.alert("All fields are required");
    }
    setLoading(true); // Set loading to true on form submission
    axios
      .post(`${BASE_URL}api/auth/login`, { email, password })
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        // const message = res.data.message;
      
        if (token) {
          localStorage.setItem("loginToken", token);
          window.alert("Login Successful");
        } else {
          navigate("/signup");
          window.alert("Invalid Credentials. Either email or password is wrong");
        }
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
                {loading?( <button className="LoadingBtn">Loading....</button>
                ) :( <button  className = "submitBtn" type="submit" id="submit">
                Submit
              </button>)}
               
              </p>
            </form>
            <h4 style={{textAlign : "center"}}>Don't have account <Link to = '/signup'><a href = '#' style={{textDecoration : "underline"}}>SignUp</a></Link></h4>
          </main>
        </div>
      </div>
    </>
  );
};

export default LoginPage;