import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const CustomCard = ({ image, title, description }) => {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={image}
//         title={title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default CustomCard;

// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

const CustomCard = ({ image, title, description,question }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '20px 17px' }}> {/* Add margin: '10px 0' */}
      <CardMedia
        sx={{ height: 190 }}
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
        <button style={{borderRadius:"4px"}}>Solve Now</button>
        <h4>{question} Questions to go</h4>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
