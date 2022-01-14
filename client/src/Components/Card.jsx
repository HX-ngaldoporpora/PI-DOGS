import React from 'react'
import FavoritesActions from './FavoritesActions'
import barking from '../Components/Img/barking.jpg'
import s from './Styles/Card.module.css'
import {Link} from 'react-router-dom';

function Card({name, image, id, max_weight, temperament, temperaments, min_weight}) {
    
    return (
        <div className={s.card} >
           
            <Link to ={`/dogs/${id}`} > 
            <h2 className={s.linkedname}>{name.toUpperCase()}</h2>
          
             { image ?  <img src= {image} alt= "Barking in another place!" className={s.img}/> : <img className={s.img} src = {barking} alt = "Woof"/>}<br/>
             <p className={s.extras}> Weight {min_weight} - {max_weight} kgs. </p><br/>
             <p className={s.extras}> Temperaments: {temperament} {temperaments}</p> </Link> 
             
             <div >
            
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






