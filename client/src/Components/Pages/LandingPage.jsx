import React from 'react';
import {Link} from 'react-router-dom';
import s from "../Styles/LandingPage.module.css"
import Hello from '../Img/welcome.jpg'
import DataWoof from '../Img/DataWoof.png'

export default function LandingPage () {
    return (
        <div className={s.gral}>
            <img src={DataWoof} alt="DataWoof" className={s.datawoof} width="15%" height="15%"/>
            <img src={Hello} alt="Hello" className={s.img}/>
             <Link to= "/dogs">
            <button className={s.welcome}> Come in! </button>
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