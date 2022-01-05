import React, {useEffect} from 'react'
import {removeFavorite} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import Nav from '../Nav'

function Favorites({id, name, image}) {  
    const myFavorites = useSelector ((state) => state.favorites)
    
    console.log(myFavorites)
    const dispatch = useDispatch()

   function handleRemove (e){
        dispatch(removeFavorite(e));
        alert("Remove from favorites")
    }

    
    return (
        <div>
            <Nav/>
            <h1> My Favorites</h1>
            {myFavorites?.map(el => {
                return(
                    <div key = {el.id}>
                    <h2 >SOY {el.name} {el.id}</h2>
                   <img src={el.image} alt = "Barking in another place"/>
                 <button onClick ={(e) => handleRemove(e)}> REMOVE </button>
                    </div>
                    )
            })
            }
            </div>
    )
}

export default Favorites
