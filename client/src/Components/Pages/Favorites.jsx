import React, {useEffect, useState} from 'react'
import {removeFavorite} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import Nav from '../Nav'
import s from "../Styles/Favorites.module.css"


function Favorites() {  
    const dispatch = useDispatch()
    const history = useHistory()
    const myFavorites = useSelector ((state) => state.favorites)
    console.log(myFavorites)

    
   function handleDelete (el){
       console.log(el)
      dispatch(removeFavorite(el.id))
      alert("Remove from favorites")
      history.push('/dogs')
   }
     return (
        <div className={s.gral}> 
            <Nav/>
            <h1> My Favorites</h1>
            
            {myFavorites?.map(el => {
                return(
                    <div className= {s.fav} key = {el.id}>
                    <h2 >FAV Nro. {el.id} {el.name}  </h2>
                    <img src= {el.image} alt ="woof" weight="150px" height="75px"/>
                    <button  onClick = {() => handleDelete(el)}> REMOVE FAVORITE </button> 
                    </div>
                    )
            })
            }
            </div>
    )
}

export default Favorites
