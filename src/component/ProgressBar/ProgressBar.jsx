// export default ProgressBar;
import React, { useState } from 'react';
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

const ProgressBar = ({ bgcolor, progress, height }) => {

  const totalValue = 10;
  const [currentValue, setCurrentValue] = useState(9);
  const progressPercentage = (currentValue / totalValue) * 100;

  const Parentdiv = {
    height: height,
    width: "50%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "auto",
  };

  const Childdiv = {
    height: "100%",
    width: `${progressPercentage}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };


  const handleIncrease = () => {
    if (currentValue < totalValue) {
      setCurrentValue(prevValue => prevValue + 1);
    }
  };
  
  return (
    <div style={{ marginBottom: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          margin: "30px 0px 20px",
          top: "10%",
          left: "50%",
        }}
      >
         <CircularProgress size="lg" determinate value = { progressPercentage}> 
           {currentValue} / {totalValue}
       </CircularProgress>
      </Box>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progressPercentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;


