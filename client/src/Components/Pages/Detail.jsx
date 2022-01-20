import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, getAllDogs, deleteDog  } from "../../Actions";
import {useHistory} from 'react-router-dom'
import Nav from '../Nav'
import load from '../Img/loading.gif'
import barking from '../Img/fotocarnet.jpg'
import s from '../Styles/Detail.module.css'
import remove from '../Img/remove.png'



function Detail(props) {
    const dispatch = useDispatch()
    const id = props.match.params.id 
    const myDog = useSelector((state) => state.detail)
    const history = useHistory()

    const handleDelete = (el) =>{
    dispatch(deleteDog(el.id))
    alert("Delete Dog Successfully")
    history.push('/dogs')
}
  
       useEffect(()=>{
        dispatch(getDetail(id));
        dispatch(clearDetail());    
        dispatch(getAllDogs());           
        },[id, dispatch])
    
        function addPhoto (e) {
            e.target.src = barking
        }
    return (
     <div className={s.gral}>
          <Nav/>
          
         <div > 
        {
         myDog.length === 0 ?  
         <p><img src={load} height="200px" width="200px" alt="loading"/></p> : 
         myDog.length > 0 && 
        <div className={s.container}> 
         {myDog[0].createdInDataBase? <button className={s.btn} onClick={() => handleDelete(myDog[0])}> <img className={s.remove} src={remove} alt="remove" title="REMOVE DOG"/> </button> : <p> </p> }
  <h1 > {myDog[0].name.toUpperCase()}</h1>
  <>{myDog[0].image !== "" ? <img className={s.imgdetail} src = {myDog[0].image} alt= "Barking in another place" onError={addPhoto}/> : <img className={s.imgdetail} src = {barking} alt = "Woof"/>} </>
  <h5 > Min Weight: {myDog[0].min_weight} kgs. - Max Weight: {myDog[0].max_weight} kgs.</h5>
  <h5> Min Height: {myDog[0].min_height} cms. - Max Height: {myDog[0].max_height} cms. </h5>
  <h5> Life Span : {myDog[0].life_span}</h5>
  <h5>Temperaments: {myDog[0].createdInDataBase? myDog[0].temperaments.map(el => el.name ).join(', '): myDog[0].temperament.split(', ').map(e => e ).join(', ')}</h5> 
 
  </div>  }
</div>
<div>

</div>
</div>
    )
    
}

export default Detail;


