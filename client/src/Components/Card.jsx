import React from 'react'

function Card({name, image}) {
    return (
        <div>
            <img src= {image} alt= "Barking in another place!" height="250px" weight="400px"/>
            <h2> {name.toUpperCase()} </h2>
        </div>
    )
}

export default Card
