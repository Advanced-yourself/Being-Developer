
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../AllSheets/Sheets.css";
import questions from "../../questions";
import { Link } from 'react-router-dom';



const Sheets = () => {

  const total = questions.length;
  
  return (
    <div className='sheet-container'>
    <Link to="/dsa/AllSheets/AllQuestions">
      <Card sx={{ minWidth: 370, minHeight: 240}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           SOLVE NOW!
        </Typography>
        <Typography variant="h5" component="div">
          LOVE BABBAR
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
           {total} Questions Curated by Love Babbar
        </Typography>
        <Typography variant="body2">
          Questions Completed: 0/{total}
        </Typography>
      </CardContent>
    </Card>
    </Link>
    </div>
  )
}

export default Sheets;
