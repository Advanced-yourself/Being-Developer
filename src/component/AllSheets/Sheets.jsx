import { useState,useEffect } from 'react';
import { Grid } from '@mui/material';
import CustomCard from './CustomCard';
import striver from '../../../src/assets/striver.png';
import loveBabbar from '../../../src/assets/loveBabbar.png';
import anuj from '../../../src/assets/anuj.jpg';
import nishant from '../../../src/assets/nishant.png';
import leetcode from '../../../src/assets/leetcode.jpg';
import neetcode from '../../../src/assets/neetCode.png';
import './Sheets.css';
import axios from 'axios';

const Sheets = () => {


  const [sheets,setSheets] = useState([]);
  
  const imgs = [striver,nishant,loveBabbar,leetcode,neetcode,anuj]


  useEffect(()=> {

    const token = localStorage.getItem('loginToken');
     
    axios.get('http://localhost:5100/api/sheets/allsheets',{
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    })
    .then(res=> {
        
          //  setSheets(res.data)
          console.log(res.data.sheets);
          setSheets(res.data.sheets);
    })
    .catch(err=> {

        console.log("All sheets", err)
    })

  },[])


  return (
    <div className="sheet-container">
      <Grid container spacing={0} className='card-container'>
      {sheets?.map((item, index)=> {
           return (
          <Grid item xs={12} sm={6} md={4} key={index}>
          <CustomCard
            image={imgs[index]}
            alt = "title"
            className = "dsaSheetImg"
            title={item.title}
            description={item.description}
            question={item.questions}
          />
        </Grid>
           )
      })}
      </Grid>
    </div>
  );
};

export default Sheets;
