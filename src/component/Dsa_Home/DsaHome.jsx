import "./DsaHome.css";
import sadBlack from "../../../src/assets/sad-face-dark.png";
import sadLight from "../../../src/assets/sad-face-light.png";
import { Link } from "react-router-dom";

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
      <Link to="/dsa/AllSheets">
      <button>Start Now</button>
      </Link>
    </div>
  );
}

export default DsaHome;
