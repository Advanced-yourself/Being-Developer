import "./Home.css";
const Home = () => {
  return (
    <>
      <main className="container">
        <div className="DsaContainer">
          <img src = ".\src\assets\asset2.png"className="DsaSection"/>
          <button>Learn DSA</button>
        </div>

        <div className="WebDevContainer">
          <img src = ".\src\assets\asset1.png" className="WebDevSection"></img>
          <button>Web Dev</button>
        </div>
      </main>
    </>
  );
};

export default Home;
