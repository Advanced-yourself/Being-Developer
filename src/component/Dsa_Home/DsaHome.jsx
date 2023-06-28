import "./DsaHome.css";
import sadBlack from "../../../public/assets/sad-face-dark.png";
import sadLight from "../../../public/assets/sad-face-light.png";

function DsaHome({toggleTheme, theme}) {

  const imageSource = theme === "dark" ? sadLight : sadBlack;
  const colors = theme === "dark"? "white" : "black";
  return (
    <div className="dsa-container">
      <img
        className="icon"
        src={imageSource}
        style={{ width: "240px" }}
      />
      <h3 style={{color: `${colors}`}}>No sheet Started Yet</h3>
      <button>Start Now</button>
    </div>
  );
}

export default DsaHome;
