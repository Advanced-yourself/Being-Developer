
import "../Login/LoginComp.css";

const LoginComp = () => {

  return (
    <>
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form action="#">
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>

            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>

          <div className="form-link">
            <span>
              Dont have an account?{" "}
              <a href="#" className="link signup-link">
                Signup
              </a>
            </span>
          </div>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>

        <div className="media-options">
          <a href="#" className="field google">
            <img src="" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default LoginComp
