
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import "../AllSheets/Sheets.css";
// import questions from "../../questions";
// import { Link } from 'react-router-dom';



// const Sheets = () => {

//   const total = questions.length;
  
//   return (
//     <div className='sheet-container'>
//     <Link to="/dsa/AllSheets/AllQuestions">
//       <Card sx={{ minWidth: 370, minHeight: 240}} >
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//            SOLVE NOW!
//         </Typography>
//         <Typography variant="h5" component="div">
//           LOVE BABBAR
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//            {total} Questions Curated by Love Babbar
//         </Typography>
//         <Typography variant="body2">
//           Questions Completed: 0/{total}
//         </Typography>
//       </CardContent>
//     </Card>
//     </Link>
//     </div>
//   )
// }

// export default Sheets;
// // 


import { Grid } from '@mui/material';
import CustomCard from './CustomCard';
import striver from '../../../src/assets/striver.png';
import loveBabbar from '../../../src/assets/loveBabbar.png';
import anuj from '../../../src/assets/anuj.jpg';
import nishant from '../../../src/assets/nishant.png';
import leetcode from '../../../src/assets/leetcode.jpg';
import neetcode from '../../../src/assets/neetCode.png';
import './Sheets.css';

const Sheets = () => {
  return (
    <div className="sheet-container">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={striver}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 1"
            description="This is the first card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={loveBabbar}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 2"
            description="This is the second card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={nishant}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={neetcode}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={striver}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={striver}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={anuj}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomCard
            image={leetcode}
            alt = "title"
            className = "dsaSheetImg"
            title="Card 3"
            description="This is the third card."
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sheets;
