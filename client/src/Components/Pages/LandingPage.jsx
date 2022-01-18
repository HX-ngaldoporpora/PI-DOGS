import React from 'react';
import {Link} from 'react-router-dom';
import s from "../Styles/LandingPage.module.css"
import logo from '../Img/welcome.png'
import DataWoof from '../Img/datawoof.jpg'

export default function LandingPage () {
    return (
        <div className={s.gral}>
             <img src={DataWoof} alt="DataWoof" className={s.img}/>
             <Link to= "/dogs">
                 <img src= {logo} alt="logo" className={s.welcome} width='40%' height="40%"/>
              </Link>
        </div>
    )
}


 /* 
 import welcome from '../Img/welcome.mp4'
 
 <video 
 className={s.video}
  autoPlay loop muted> 
 <source src= {welcome} type="video/mp4" /> 
 </video> 
 */