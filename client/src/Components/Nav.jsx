import React from 'react'
import {Link} from "react-router-dom";
import Home from './Img/home1.png'
import Like from './Img/like.png'
import Create from './Img/create.png'
import s from './Styles/Nav.module.css'


function Nav() {

    return (
        <div className={s.nav}>
            <Link to= '/dogs'> <img src= {Home} weight="40px" height="40px" alt="Home"/> </Link>
            <Link to = '/dogs/create'> <img src={Create} weight="40px" height="40px" alt= "CREATE"/></Link>
            <Link to= '/favorites'> <img src={Like}  weight="40px" height="40px" alt="Favorites"/> </Link>
            <Link to= '/about'> <p className={s.about}>about</p> </Link>
          
        </div>
    )
}

export default Nav
