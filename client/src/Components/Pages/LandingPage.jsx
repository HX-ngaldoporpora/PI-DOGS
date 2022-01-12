import React from 'react';
import {Link} from 'react-router-dom';

import s from "../Styles/LandingPage.module.css"

export default function LandingPage () {
    return (
        <div className={s.gral}>
                      
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