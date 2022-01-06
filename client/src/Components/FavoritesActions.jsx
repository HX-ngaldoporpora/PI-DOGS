import React,  {useEffect, useState} from 'react'
import {addFavorite, removeFavorite} from '../Actions'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router-dom";


function FavoritesActions({id, name, image}) {
  const  dispatch = useDispatch()
const history = useHistory()
/*const myFavorites = useSelector ((state) => state.favorites)
const [fav, setFav] = useState({
    favorites: []
})*/

 function handleClick () {
    dispatch(addFavorite({id, name, image}));
    alert("Add to favorites");
    //history.push("/favorites")
}

function handleDelete (id){
    dispatch(removeFavorite(id))

  /*  setFav({
        ...fav,
        favorites: fav.favorites.filter(el => el !==e)
    })
    alert("Remove from favorites")*/
}

useEffect(() => {
    dispatch (removeFavorite(id))
    },[dispatch])


    return (
        <div>
        <button onClick ={() => handleClick()}> ADD FAVORITES</button>
        <button onClick = {() => handleDelete(id)}> REMOVE FAVORITE </button> 
        </div>
    )
}

export default FavoritesActions
