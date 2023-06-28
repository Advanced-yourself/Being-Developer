import "./Learn.css";
import webImg from "../../../public/assets/asset1.png";
import dsaImg from "../../../public/assets/asset2.png";

const Home = () => {
  return (
    <>
    <h1>LEARN</h1>
      <main className="learn-container">
        <div className="DsaContainer">
          <img src ={dsaImg} className="DsaSection"/>
          <button className="learn-btn">Data Structures & Algorithms</button>
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