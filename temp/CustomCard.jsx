import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const CustomCard = ({ image, title, description,question }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '20px 17px',display:"flex",flexWrap:"wrap" }}> {/* Add margin: '10px 0' */}
      <CardMedia
        sx={{ height: 190 ,display:"flex",flexWrap:"wrap"}}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{display: "flex",justifyContent: "space-around"}}>
        {/* <button style={{borderRadius:"4px"}}>Solve Now</button> */}
        <Button>Solve Now</Button>/
        <h4>{question} Questions to go</h4>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
