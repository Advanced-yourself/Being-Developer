// import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Card from '../component/TopicCard/TopicCard'

const SheetsTopics= ({toggleTheme, theme}) => {
    return (
        <>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Card/>
        <Footer/>      
        </>
    )
  }
  
  export default SheetsTopics;
  