import React from 'react'
import YourSheet from '../component/YourSheet/YourSheet'

const YourSheetPage = ({toggleTheme,theme}) => {
  return (
    <>
    <Nav
      <YourSheet toggleTheme={toggleTheme} theme={theme}/>
    </>
  )
}

export default YourSheetPage
