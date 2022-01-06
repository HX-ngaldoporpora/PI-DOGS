import React from 'react'
import barking from '../Components/Img/barking.jpg'

function Card({name, image, id}) {
    
    return (
        <div>
             { image ?  <img src= {image} alt= "Barking in another place!" 
height="250px" weight="400px"/> : <img src = {barking} alt = "Woof"/>}
              <h2> {name.toUpperCase()} </h2>
         </div>
    )
}

export default Card



