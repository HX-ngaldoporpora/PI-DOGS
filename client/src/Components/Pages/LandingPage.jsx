import React from 'react';
import {Link} from 'react-router-dom';
import Hello from '../Img/welcome.jpg'
import s from "../Styles/LandingPage.module.css"

export default function LandingPage () {
    return (
        <div className={s.gral}>
            <img src={Hello} alt="Hello" className={s.img}/>          
             <Link to= "/dogs">
            <h1 className={s.welcome} >Welcome!</h1>
            </Link>
        </div>
    )
}

/* <video 
 className={s.video}
  autoPlay loop muted> 
 <source src= {} type="video/mp4" /> 
 </video> */