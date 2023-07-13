import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1>Login</h1>
            <p>It just takes 30 seconds</p>
          </header>
          <main className="signup-body">
            <form action="#">
              <p>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="xyz@gmail.com"
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
                <input type="submit" id="submit" defaultValue="Login" />
              </p>
            </form>
          </main>
        </div>
        <div className="circle c1" />
        <div className="circle c2" />
      </div>
    </>
  );
};

export default LoginPage;
