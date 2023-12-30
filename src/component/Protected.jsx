import {useEffect} from "react";
import { Link, useNavigate} from "react-router-dom";

const Protected = (props) => {

    const {Component, theme,toggleTheme} = props;
    const navigate = useNavigate();
    useEffect(()=> {
     let login = localStorage.getItem('token');
     if(!login)
     {
        navigate('/login');
     }
    })
  return (
    <div>
      <Component theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )
}

export default Protected;
