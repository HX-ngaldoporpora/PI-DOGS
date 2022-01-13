import React from 'react'
import {Link} from "react-router-dom";
import Home from './Img/home1.png'
import Like from './Img/like.png'
import Create from './Img/create.png'
import About from './Img/dog.png'
import s from './Styles/Nav.module.css'


function Nav() {

    return (
        <div className={s.nav}>
            <Link to= '/dogs'> <button className={s.btn}> <img src= {Home} weight="40px" height="40px" title="HOME"/></button></Link>
            <Link to = '/dogs/create'> <button className={s.btn}>  <img src={Create} weight="40px" height="40px" title= "CREATE"/>  </button></Link>
            <Link to= '/favorites'> <button className={s.btn}> <img src={Like}  weight="40px" height="40px" title="FAVORITES"/> </button></Link>
            <Link to= '/about'> <button className={s.btn}><img src={About} weight="40px" height="40px" title= "ABOUT"/> </button> </Link>
          
        </div>
    )
}

export default Nav
