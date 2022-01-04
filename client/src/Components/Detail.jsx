import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, getAllDogs } from "../Actions";
import Nav from './Nav'

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
  <h1> This is a {myDog[0].name}</h1>
  <img src = {myDog[0].image} alt= "Barking in another place" width= "400px" height="200"/>
  <h2> Weight: {myDog[0].minweight} - {myDog[0].maxweight}</h2>
  <h2> Height: {myDog[0].minheight} - {myDog[0].maxheight} </h2>
  <h2> Life Span : {myDog[0].life_span}</h2>
  <h2>Temperaments: {myDog[0].createdInDataBase? myDog[0].temperaments.map(el => el.name ).join(', '): myDog[0].temperament.split(', ').map(e => e ).join(', ')}</h2> 
</div>  }
</div>
    )
}

export default Detail;
