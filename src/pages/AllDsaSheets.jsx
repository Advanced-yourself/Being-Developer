import React from 'react';
import Sheets from '../component/AllSheets/Sheets';
import DsaNavbar from '../component/Dsa_Nav/DsaNavbar';
import DsaFooter from '../component/DsaFooter/DsaFooter';

const AllDsaSheets = ({toggleTheme, theme}) => {
  return (
    <div>
    <DsaNavbar toggleTheme={toggleTheme} theme={theme}/>
      <Sheets/>
    <DsaFooter/>
    </div>
  )
}

export default AllDsaSheets
