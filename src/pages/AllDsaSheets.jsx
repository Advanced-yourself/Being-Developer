import React from "react";
import Sheets from "../component/AllSheets/Sheets";
import DsaNavbar from "../component/Dsa_Nav/DsaNavbar";
import Footer from "../component/Footer/Footer";

const AllDsaSheets = ({ toggleTheme, theme }) => {
  return (
    <div>
      <DsaNavbar toggleTheme={toggleTheme} theme={theme} />
      <Sheets />
      <Footer />
    </div>
  );
};

export default AllDsaSheets;
