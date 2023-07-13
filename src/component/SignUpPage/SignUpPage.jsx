
import './SignUpPage.css';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  return (
    <>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Signup</h1>
            <p>It just takes 30 seconds</p>
          </header>
          <main className="signup-body">
            <form action="#">
              <p>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Bill Gates"
                  required=""
                />
              </p>
              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="billgates@gmail.com"
                  required=""
                />
              </p>
              <p>
                <label htmlFor="password">Your New Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="at least 5 characters"
                  required=""
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
