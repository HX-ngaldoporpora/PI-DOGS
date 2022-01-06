import React, {useEffect, useState} from 'react'
import {removeFavorite} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Nav from '../Nav'


function Favorites({id}) {  
    const dispatch = useDispatch()
    const myFavorites = useSelector ((state) => state.favorites)
    console.log(myFavorites)
  /* let [fav, setFav] = useState({
       favorite: myFavorites
   })*/
     

   function handleDelete (id){
      dispatch(removeFavorite(id))
      
      //alert("Remove from favorites")
    /* setFav({
         favorite: myFavorites.filter(e => e !== el)
     })*/
    }
   useEffect(() =>{
        dispatch(removeFavorite(id))
    },[dispatch])


    return (
        <div>
            <Nav/>
            <h1> My Favorites</h1>
            
            {myFavorites?.map(el => {
                return(
                    <div key = {el.id}>
                    <h2 >FAV Nro. {el.id} {el.name}  </h2>
                    <img src= {el.image} alt ="woof" weight="150px" height="75px"/>
                    <button  onClick = {(e) => handleDelete(e)}> REMOVE FAVORITE </button> 
                    </div>
                    )
            })
            }
            </div>
    )
}

export default Favorites
