import React  from 'react'
import {addFavorite} from '../Actions'
import {useDispatch} from 'react-redux'
import s from './Styles/FavoriteAction.module.css'
import Like from './Img/like.png'


function FavoritesActions({id, name, image}) {
const  dispatch = useDispatch()


 function handleClick () {
    dispatch(addFavorite({id, name, image}));
    alert("Add to favorites");
  
}
    return (
        <div>
        <button className={s.btn} onClick ={() => handleClick()}> <img src={Like}alt= "Fav" height='30px' weight="30px"/> </button>
        </div>
    )
}

export default FavoritesActions



///////////////////////////////////////////////////////

/*
/*const myFavorites = useSelector ((state) => state.favorites)
const [fav, setFav] = useState({
    favorites: []
})
function handleDelete (e){
    dispatch(removeFavorite(e))
    alert("Remove from favorites")
    setFav({
        ...fav,
        favorites: fav.favorites.filter(el => el !==e)
    })
    alert("Remove from favorites")
}

useEffect(() => {
    dispatch (removeFavorite(id))
    },[dispatch])*/


