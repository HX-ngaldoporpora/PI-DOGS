import React from 'react'
import {removeFavorite} from '../../Actions'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import Nav from '../Nav'
import barking from '../Img/barking.jpg'
import remove from '../Img/remove.png'
import like from '../Img/favorito.png'
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
            <h1 className={s.title}> My Favorites</h1>
            <div className={s.box}> 
            {myFavorites?.map(el => {
                return(
                    <div className= {s.fav} key = {el.id}>
                    <h2 ><p> <img src={like}  weight="30px" height="30px" /> <br/>{el.name} </p>  </h2>
                   
                   <div > {el.image?  <img className={s.imgfav} src= {el.image} alt ="woof"/> : <img src={barking} className={s.imgfav} />} </div>

                    <button  className={s.btn} onClick = {() => handleDelete(el)}> <img src={remove} weight="30px" height="30px" alt="DELETE" /> </button> 
                    </div>
                    )
            })
            }
            </div>
            </div>
    )
}

export default Favorites
