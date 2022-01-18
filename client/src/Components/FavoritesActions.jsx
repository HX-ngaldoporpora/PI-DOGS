import React  from 'react'
import {addFavorite} from '../Actions'
import {useDispatch} from 'react-redux'
import s from './Styles/FavoriteAction.module.css'
import Like from './Img/like.png'


function FavoritesActions({id, name, image}) {
const  dispatch = useDispatch()

 function handleClick () {
    dispatch(addFavorite({id, name, image}));
    alert("Add to favourites");
  
}
    return (
        <div>
        <button className={s.btn} onClick ={() => handleClick()}> <img src={Like} alt= "Fav" height='30px' weight="30px"/> </button>
      </div>
    )
}

export default FavoritesActions




















