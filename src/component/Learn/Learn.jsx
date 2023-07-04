import "./Learn.css";
import webImg from "../../../src/assets/asset1.png";
import dsaImg from "../../../src/assets/asset2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h1>LEARN</h1>
      <main className="learn-container">
        <div className="DsaContainer">
          <img src ={dsaImg} className="DsaSection"/>
          <Link to="/dsa">
          <button className="learn-btn">Data Structures & Algorithms</button>
          </Link>
        </div>

        <div className="WebDevContainer">
          <img src ={webImg} className="WebDevSection"></img>
          <button className="learn-btn">Web Development</button>
        </div>
      </main>
    </>
  );
};

export default Home;