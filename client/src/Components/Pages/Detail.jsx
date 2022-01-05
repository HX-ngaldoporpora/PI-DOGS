import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, getAllDogs } from "../../Actions";
import Nav from '../Nav'
import barking from '../Img/barking.jpg'



function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id 
    const myDog = useSelector((state) => state.detail)
  
       useEffect(()=>{
        dispatch(getDetail(id));
        dispatch(clearDetail())    
        dispatch(getAllDogs())    
        },[id, dispatch])
    
    return (
     <div>
         <Nav/>
        {
         myDog.length === 0 ?  
         <p>Loading...</p> : 
         myDog.length > 0 && 
        <div> 
  <h1> {myDog[0].name.toUpperCase()}</h1>
  <>{myDog[0].image != "" ? <img src = {myDog[0].image} alt= "Barking in another place" width= "400px" height="200"/> : <img src = {barking} alt = "Woof"/>} </>
  <h2> Weight: {myDog[0].min_weight} - {myDog[0].max_weight} kgs.</h2>
  <h2> Height: {myDog[0].min_height} - {myDog[0].max_height} cms. </h2>
  <h2> Life Span : {myDog[0].life_span}</h2>
  <h2>Temperaments: {myDog[0].createdInDataBase? myDog[0].temperaments.map(el => el.name ).join(', '): myDog[0].temperament.split(', ').map(e => e ).join(', ')}</h2> 
</div>  }
<div> 




</div>
</div>
    )
    
}

export default Detail;
