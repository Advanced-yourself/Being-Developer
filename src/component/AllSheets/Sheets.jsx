// import { useState, useEffect } from "react";
// import { Grid } from "@mui/material";
// import striver from "../../../src/assets/striver.png";
// import loveBabbar from "../../../src/assets/loveBabbar.png";
// import anuj from "../../../src/assets/anuj.jpg";
// import nishant from "../../../src/assets/nishant.png";
// import leetcode from "../../../src/assets/leetcode.jpg";
// import neetcode from "../../../src/assets/neetCode.png";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import "./Sheets.css";
// import axios from "axios";
// import ShimmerCard from "../ShimmerCard/ShimmerCard";

// const Sheets = () => {
//   const [sheets, setSheets] = useState([]);

//   const imgs = [striver, nishant, loveBabbar, leetcode, neetcode, anuj];

//   useEffect(() => {
//     const token = localStorage.getItem("loginToken");

//     axios
//       .get("http://localhost:5100/api/sheets/allsheets", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         //  setSheets(res.data)
//         console.log(res.data.sheets);
//         setSheets(res.data.sheets);
//       })
//       .catch((err) => {
//         console.log("All sheets", err);
//       });
//   }, []);

//   return (
//     <div className="sheet-container">
//       <ShimmerCard></ShimmerCard>
//       <Grid container spacing={0} className="card-container">
//         {sheets?.map((item, index) => {
//           return (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card sx={{ maxWidth: 300, margin: "20px 17px" }}>
//                 {" "}
//                 {/* Add margin: '10px 0' */}
//                 <CardMedia sx={{ height: 190 }} image={imgs[index]} title={item.title} />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {item.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions
//                   style={{ display: "flex", justifyContent: "space-around" }}
//                 >
//                   {/* <button style={{borderRadius:"4px"}}>Solve Now</button> */}
//                   <Link to={`/dsa/allSheets/topic/${item._id}`}>
//                     <Button>Solve Now</Button>
//                   </Link>
//                   <h4>{item.questions} Questions to go</h4>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </div>
//   );
// };

// export default Sheets;


// import { useState, useEffect } from "react";
// import { Grid } from "@mui/material";
// import ShimmerCard from "../ShimmerCard/ShimmerCard"; // Import your ShimmerCard component
// import striver from "../../../src/assets/striver.png";
// import loveBabbar from "../../../src/assets/loveBabbar.png";
// import anuj from "../../../src/assets/anuj.jpg";
// import nishant from "../../../src/assets/nishant.png";
// import leetcode from "../../../src/assets/leetcode.jpg";
// import neetcode from "../../../src/assets/neetCode.png";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import "./Sheets.css";
// import axios from "axios";

// const Sheets = () => {
//   const [sheets, setSheets] = useState([]);
//   const [loading, setLoading] = useState(true); // State to control loading/shimmer effect

//   const imgs = [striver, nishant, loveBabbar, leetcode, neetcode, anuj];

//   useEffect(() => {
//     const token = localStorage.getItem("loginToken");

//     axios
//       .get("http://localhost:5100/api/sheets/allsheets", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => {
//         console.log(res.data.sheets);
//         setSheets(res.data.sheets);
//         setLoading(false); // Set loading to false when data is loaded
//       })
//       .catch((err) => {
//         console.log("All sheets", err);
//         setLoading(false); // Set loading to false even if there's an error
//       });
//   }, []);

//   return (
//     <div className="sheet-container">
//      {loading ? (
//         // Display a shimmer card for each sheet
//         sheets.map((sheet, index) => <ShimmerCard key={index} />)
//       )  : (
//         <Grid container spacing={0} className="card-container">
//           {sheets?.map((item, index) => {
//             return (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card sx={{ maxWidth: 300, margin: "20px 17px" }}>
//                   {" "}
//                   {/* Add margin: '10px 0' */}
//                   <CardMedia sx={{ height: 190 }} image={imgs[index]} title={item.title} />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       {item.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {item.description}
//                     </Typography>
//                   </CardContent>
//                   <CardActions
//                     style={{ display: "flex", justifyContent: "space-around" }}
//                   >
//                     <Link to={`/dsa/allSheets/topic/${item._id}`}>
//                       <Button>Solve Now</Button>
//                     </Link>
//                     <h4>{item.questions} Questions to go</h4>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             );
//           })}
//         </Grid>
//       )}
//     </div>  
//   );
// };

// export default Sheets;

import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import striver from "../../../src/assets/striver.png";
import loveBabbar from "../../../src/assets/loveBabbar.png";
import anuj from "../../../src/assets/anuj.jpg";
import nishant from "../../../src/assets/nishant.png";
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

const Sheets = () => {
  const [sheets, setSheets] = useState([]);
  const [loading, setLoading] = useState(true);

  const imgs = [striver, nishant, loveBabbar, leetcode, neetcode, anuj];

  useEffect(() => {
    const token = localStorage.getItem("loginToken");

    axios
      .get("http://localhost:5100/api/sheets/allsheets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.sheets);
        setSheets(res.data.sheets);
        setLoading(false);
      })
      .catch((err) => {
        console.log("All sheets", err);
        setLoading(false);
      });
  }, []);

  // Create an array of length 10 to render 10 shimmer cards
  const shimmerCards = Array.from({ length: 15 }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className="sheet-container">
      {loading ? (
        // Render the shimmer cards
        shimmerCards
      ) : (
        <Grid container spacing={0} className="card-container">
          {sheets?.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 300, margin: "20px 17px" }}>
                  <CardMedia
                    sx={{ height: 190 }}
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
