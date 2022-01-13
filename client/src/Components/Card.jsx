import React from 'react'
import FavoritesActions from './FavoritesActions'
import barking from '../Components/Img/barking.jpg'
import s from './Styles/Card.module.css'
import {Link} from 'react-router-dom';

function Card({name, image, id, max_weight}) {
    
    return (
        <div className={s.card} >
           
            <Link to ={`/dogs/${id}`} > 
            <h2 className={s.linkedname}>{name.toUpperCase()}</h2>
          
             { image ?  <img src= {image} alt= "Barking in another place!" className={s.img}/> : <img className={s.img} src = {barking} alt = "Woof"/>}
             <h6> Max weight {max_weight} kg</h6></Link> 
            
             <div className={s.extras}>
            
              <p className={s.favorite}>   
                    <FavoritesActions 
                     id = {id}
                    name = {name}
                    image = {image}
                    />         
                    </p>
                    </div>
                  
                    </div>
         
        
    )
}

export default Card







