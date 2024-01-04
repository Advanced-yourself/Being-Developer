import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import striver from "../../../src/assets/striver.png";
import striver2 from "../../../src/assets/striver2.png";
// import striver3 from "../../../src/assets/striver3.jpg";
import loveBabbar from "../../../src/assets/loveBabbar.png";
import nishant from "../../../src/assets/nishant.jpg";
import leetcode from "../../../src/assets/leetcode.jpg";
import neetcode from "../../../src/assets/neetCode.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Sheets.css";
import axios from "axios";
import { BASE_URL } from "../../config";
import { serverIssue, striver_79 } from "../../utils/image";

const Sheets = () => {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const imgs = [loveBabbar,striver2,neetcode,leetcode,striver,nishant,striver_79];

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("Token Console",token);
    if(token){
      // console.log("Api called");
      handleSheet(token);
    }
  }, []);

  const handleSheet = (token) =>{
    console.log(BASE_URL);
    axios
    .get(`${BASE_URL}api/sheets/allsheets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data.sheets);
      console.log(res.data);
      setSheets(res.data.sheets);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching sheets:", err);
        setError(true);
        setLoading(false);
    });

  }

  // Create an array of length 10 to render 10 shimmer cards
  const shimmerCards = Array.from({ length: 6 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className="sheet-container">
      {loading ? (
        // Render the shimmer cards
        shimmerCards
      ) 
      : error ? (
        <img src = {serverIssue} alt="Error Image" className="error-image" />
      ): (
        <Grid container spacing={0} className="card-container">
          {sheets?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index} className="Grid-container">
                <Card sx={{ minWidth: "20rem", margin: "20px 17px", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                  <CardMedia
                    sx={{ height: 190}}
                    image={imgs[index]}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Link to={`/dsa/allSheets/topic/${item._id}`}>
                      <Button>Solve Now</Button>
                    </Link>
                    <h4>{item.questions} Questions to go</h4>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Sheets;

