import React from 'react'
import {Link} from "react-router-dom";
import DataWoof from './Img/DataWoof.png'
import Home from './Img/home1.png'
import Like from './Img/like.png'
import Create from './Img/create.png'
import About from './Img/dog.png'
import s from './Styles/Nav.module.css'


function Nav() {

    return (
        <div className={s.nav}>
            <img src={DataWoof} width="60%" height="60%" alt="DataWoof"/>
            <Link to= '/dogs'> <button className={s.btn}> <img src= {Home} weight="40px" height="40px" title="HOME" alt="home" /></button></Link>
            <Link to = '/dogs/create'> <button className={s.btn}>  <img src={Create} weight="40px" height="40px" title= "CREATE" alt="create"/>  </button></Link>
            <Link to= '/favorites'> <button className={s.btn}> <img src={Like}  weight="40px" height="40px" title="FAVOURITES" alt="favorite"/> </button></Link>
            <Link to= '/about'> <button className={s.btn}><img src={About} weight="40px" height="40px" title= "ABOUT" alt="about"/> </button> </Link>
          
        </div>
    )
}

export default Nav
