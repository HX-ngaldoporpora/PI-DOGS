import React from 'react'
import FavoritesActions from './FavoritesActions'
import barking from '../Components/Img/barking.jpg'
import s from './Styles/Card.module.css'

function Card({name, image, id}) {
    
    return (
        <div className={s.card}>
             { image ?  <img src= {image} alt= "Barking in another place!" className={s.img}/> : <img src = {barking} alt = "Woof"/>}
              <p className={s.favorite}>   
              <FavoritesActions 
                     id = {id}
                    name = {name}
                    image = {image}
                    />         
                    </p>

            
            
            
            

         
         
         
         
         </div>
    )
}

export default Card


/*<FavoritesActions 
  id = {el.id}
 name = {el.name}
 image = {el.image}
 />*/
