import { useEffect, useState } from 'react';
import axios from 'axios';
import MaterialUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams, Link } from 'react-router-dom';

function Card() {

  const { id } = useParams();
  const [topics, setTopics] = useState([]);
  console.log('sheetId:', id); 
 
  useEffect(() => {
    // Fetch topics data from your API here and update the topics state

    const token = localStorage.getItem('loginToken');
    axios
      .get(`http://localhost:5100/api/topics/getTopics/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      })
      .then((response) => {
        setTopics(response.data.topics); 
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, [id]);

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {topics.map((pick) => (
        <MaterialUICard key={pick._id} sx={{ maxWidth: 275, margin: 2, padding: 2}}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
              Be a good software Engineer
            </Typography>
            <Typography variant="h5" component="div">
              {pick.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Question completed 0/50
            </Typography>
            <LinearProgress variant="determinate" value={50} valueBuffer={20} sx={{
              marginTop: '35px', // Adjust the margin as needed
              borderRadius: '30px' // Adjust the border radius as needed
            }} />
          </CardContent>
          <CardActions>
          <Link to={`/dsa/AllSheets/Questions/${pick._id}`}>
          <Button size="small">Learn More</Button>
          </Link>
          </CardActions>
        </MaterialUICard>
      ))}
    </div>
  );
}

export default Card;

