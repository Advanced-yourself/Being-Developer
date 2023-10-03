import React, { useState } from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "50%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: "auto",
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`, // Update the width based on the progress percentage
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    transition: "width 0.5s", // Add a transition for a smooth effect
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
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
        <CircularProgress size="lg" determinate value={progress}>
          {`${progress}%`}
        </CircularProgress>
      </Box>
      <div style={Parentdiv}>
        <div style={Childdiv}>
          <span style={progresstext}>{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
