
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./DsaHome.css";
import { DsaAdv, DsaBasics, JavaScript, Python } from "../../utils/image";

const LearningResoucesCard = () => {
  const resources = [
    {
      title: "DSA Basics",
      description: "Fundamental data structures and algorithms.",
      image: DsaBasics,
      link: "https://www.youtube.com/watch?v=5_5oE5lgrhw&list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi",
      questions: 92,
    },
    {
      title: "Advanced Algorithms",
      description: "In-depth algorithms and problem-solving techniques.",
      image: DsaAdv,
      link: "https://www.youtube.com/@takeUforward/playlists",
      questions: 25,
    },
    {
      title: "DSA IN C++",
      description: "Data structures and algorithms in C++.",
      image: "../../../src/assets/dsaCpp.jpg",
      link: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
      questions: 149,
    },
    {
      title: "DSA IN JAVA",
      description: "Data structures and algorithms in JAVA.",
      image: "../../../src/assets/dsaJava.jpg",
      link: "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      questions: 56,
    },
    {
      title: "DSA IN PYTHON",
      description: "Data structures and algorithms in Python.",
      image: Python,
      link: "https://www.youtube.com/watch?v=UljGkm2ikdY&list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ",
      questions: 101,
    },
    {
      title: "DSA IN JAVASCRIPT",
      description: "Data structures and algorithms in JS.",
      image: JavaScript,
      link: "https://www.youtube.com/watch?v=5mEwh4MfwB4&pp=ygURZHNhIGluIGphdmFzY3JpcHQ%3D",
      questions: 1,
    },
    // Add more resource objects as needed
  ];

  return (
    <div style={{minHeight:"100vh"}}>
    <div className="sheetContainer">
      <Grid container spacing={2} className="card-container" >
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}  style={{ display: "flex", flexWrap: "wrap",justifyContent:"center"}}>
            <Card sx={{ maxWidth: 300, margin: "20px 17px", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
              <CardMedia
                sx={{
                  height: 90, // Adjust the height as needed
                  backgroundSize: "cover", // Maintain aspect ratio and cover
                  backgroundPosition: "center", // Center the image

                }}
                image={resource.image}
                title={resource.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {resource.description}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <Link to={resource.link} target="_blank">
                  <Button>Start Now</Button>
                </Link>
                <h4>Total {resource.questions} Lectures</h4>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    </div>
  );
};

export default LearningResoucesCard;

