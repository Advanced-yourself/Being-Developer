import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Roadmap from '../component/Roadmap/roadmap'
import Footer from '../component/Footer/Footer'

const RoadmapPage = ({toggleTheme, theme}) => {
  return (
    <div>
        <Navbar toggleTheme={toggleTheme} theme={theme} ></Navbar>
        <Roadmap></Roadmap>
        <Footer></Footer>
      
    </div>
  )
}

export default RoadmapPage;
