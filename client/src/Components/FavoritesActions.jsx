import React,  {useEffect} from 'react'
import {addFavorite} from '../Actions'
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";


function FavoritesActions({id, name, image}) {
  const  dispatch = useDispatch()
const history = useHistory()

   /* useEffect(() => {
        dispatch (addFavorite(id))
        },[dispatch])*/

 function handleClick () {
    dispatch(addFavorite(id, name, image));
    alert("Add to favorites");
    history.push("/favorites")
}
    
    return (
        <div>
          
            <button onClick ={() => handleClick()}> ADD FAVORITES</button> 
        </div>
    )
}

export default FavoritesActions
