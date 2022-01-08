import React, {useEffect, useState} from 'react'
import {removeFavorite} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import Nav from '../Nav'


function Favorites({id}) {  
    const dispatch = useDispatch()
    const history = useHistory()
    const myFavorites = useSelector ((state) => state.favorites)
    console.log(myFavorites)

 /* let [fav, setFav] = useState({
       favorite: myFavorites
   })*/
     

   function handleDelete (el){
       console.log(el)
      dispatch(removeFavorite(el.id))
      alert("Remove from favorites")
      history.push('/dogs')

     /*setFav({
         favorite: myFavorites.filter(e => e !== id)
     })*/
    }
   /*useEffect(() =>{
        dispatch(removeFavorite(id))
    },[dispatch, id])*/


    return (
        <div>
            <Nav/>
            <h1> My Favorites</h1>
            
            {myFavorites?.map(el => {
                return(
                    <div key = {el.id}>
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
