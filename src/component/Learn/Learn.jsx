import { Dsa, WebDev } from "../../utils/image";
import "./Learn.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>LEARN</h1>
      <main className="learn-container">
        <div className="DsaContainer">
          <img src ={Dsa} alt = "Dsa Container Image" className="DsaSection"/>
          <Link to="/dsa">
          <button className="learn-btn">Data Structures & Algorithms</button>
          </Link>
        </div>

        <div className="WebDevContainer">
          <img src ={WebDev} alt = "WebDev Container Image" className="WebDevSection"></img>
          <Link to="/webDev">
          <button className="learn-btn">Web Development</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;