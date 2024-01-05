// import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MaterialUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { useParams, Link } from "react-router-dom";
import ShimmerCard from "../ShimmerCard/ShimmerCard";
import { BASE_URL } from "../../config";

function Card({ progressPercentage }) {
  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  console.log("sheetId:", id);

  useEffect(() => {
    // Simulate loading delay (remove this in production)
    const loadingTimeout = setTimeout(() => {
      // Fetch topics data from your API here and update the topics state
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}api/topics/getTopics/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setTopics(response.data.topics);
          setLoading(false); // Data loaded, set loading to false
        })
        .catch((error) => {
          console.error("Error fetching topics:", error);
          setLoading(false); // Handle errors and set loading to false
        });
    }, 1500); // Simulate loading for 1.5 seconds (adjust as needed)

    // Cleanup the timeout on unmount
    return () => clearTimeout(loadingTimeout);
  }, [id]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",minHeight:"100vh" }}>
      {loading ? ( // Conditionally render shimmer effect while loading
        Array.from({ length: 15 }, (_, index) => <ShimmerCard key={index} />)
      ) : (
        topics.map((pick) => (
          <MaterialUICard
            key={pick._id}
            sx={{ maxWidth: 275, margin: 2, padding: 2,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 18 }}
                color="text.secondary"
                gutterBottom
              >
                Be a good software Engineer
              </Typography>
              <Typography variant="h5" component="div">
                {pick.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Question completed 0/50
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progressPercentage}
                valueBuffer={0}
                sx={{
                  marginTop: "35px",
                  borderRadius: "30px",
                }}
              />
            </CardContent>
            <CardActions>
              <Link to={`/dsa/AllSheets/Questions/${pick._id}`}>
                <Button size="small">Start Now</Button>
              </Link>
            </CardActions>
          </MaterialUICard>
        ))
      )}
    </div>
  );
}

export default Card;
