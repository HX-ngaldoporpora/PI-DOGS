import React, {useState, useEffect} from 'react'
import Nav from '../Nav'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import {postDog, getTemperaments} from '../../Actions';
import {Link} from 'react-router-dom'
import s from '../Styles/CreateDog.module.css'
import Remove from '../Img/remove.png'
import Barking from "../Img/fotocarnet.jpg"
import ok from "../Img/ok.png"
import back from '../Img/back.png'


function validate (input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"
    }
    /*if (input.min_height < 10){
    errors.min_height = "Height must be more than 10 cm"
    }
    if (input.max_height > 80){
        errors.max_height = "Height must be less than 80 cm"
    }
    if (input.min_weight < 1){
        errors.min_weight = "Weight must be more than 1 kg"
    }
    if (input.max_weight > 100){
        errors.max_weight = "Weight must be less than 100 kg"
    }*/
    if(input.min_height > input.max_height){
    errors.max_height = "Max height must be higher than min height"
    }
    if(input.min_weight > input.max_weight){
    errors.max_weight = "Max weight must be heavier than min weight"
    }  
   
    return errors
}


function CreateDog() {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) =>state.temperaments)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
    name: "",
    life_span: "",
    min_weight: "",
    max_weight: "",
    min_height: "",
    max_height: "",
    image: "",
    temperament: []
});

function handleSelect(e) {
    if (input.temperament.includes(e.target.value)) {
        alert("Already in the list");  
    } else { 
        setInput({
            ...input,
            temperament:[...input.temperament, e.target.value]
        })
    }      
}

const handleDelete = (e) => {
    setInput({
     ...input,
     temperament: input.temperament.filter(el => el !== e)
   })
 }

 function handleSubmit(e) {
    e.preventDefault();
    dispatch(postDog(input))
    alert("Your new breed was created.... Frankenstein")
    setInput({
        name: "",
        life_span: "",
        min_weight: "",
        max_weight: "",
        min_height: "",
        max_height: "",
        image: "",
        temperament: []
          })
    history.push("/dogs")
}
function handleChange(e) {
    setInput({
        ...input,
        [e.target.name] : e.target.value
     })
     setErrors(validate({
         ...input,
         [e.target.name] : e.target.value
     }))
}

useEffect (() => {
    dispatch(getTemperaments())      
}, [dispatch])

    return (
        <div >
            <Nav/>
        <div className = {s.masgeneral}>
        <div className={s.container}>
         <div className={s.uno}>
         <h1 className={s.title}> CREATE YOUR OWN DOG'S BREED </h1>
         </div>
         
         <div className={s.dos}>    
         <form className={s.form} onSubmit={e => {handleSubmit(e)}}>
         
         
         <input
         className={s.insideinput_title}
         placeholder='Name...'
        type= "text"
        value= {input.name.toUpperCase()}
         name="name" 
          onChange = {(e) => handleChange(e)}/>
          {errors.name && (<p className={s.error}>{errors.name}</p>)} 
     
        
         <img src= {Barking} alt="Foto perrito" className={s.fotocarnet}/>
         
        
        <label className={s.subtitle}>Life Span </label>
        <input
              className={s.insideinput}
               type= "number"
             value= {input.life_span}
             name="life_span" 
             onChange = {(e) => handleChange(e)}/>
             <label className={s.subtitend}> years </label>
             {errors.life_span && (<p className={s.error}>{errors.life_span}</p>)} 
       
              
        <label className={s.subtitle} >Min weight   </label>
            <input
              className={s.insideinput}
              type= "number"
            min="1"
            value= {input.minweight}
            name="min_weight" 
            onChange = {(e) => handleChange(e)}/>
            <label className={s.subtitend}> kgs </label>
         {errors.min_weight && (<p className={s.error}>{errors.min_weight}</p>)}
        

        
        <label className={s.subtitle} >Max weight   </label>
            <input
              className={s.insideinput}
            type= "number"
            max="100"
            value= {input.max_weight}
            name="max_weight" 
            onChange = {(e) => handleChange(e)}/>
            <label className={s.subtitend}> kgs </label>
         {errors.max_weight && (<p className={s.error}>{errors.max_weight}</p>)} 
          
        
       
        <label className={s.subtitle}>Min height   </label>
         <input
           className={s.insideinput}
         type= "number"
         min="10"
         value= {input.min_height}
         name="min_height" 
         onChange = {(e) => handleChange(e)}/>
         <label className={s.subtitend}> cms </label>
        {errors.min_height && (<p className={s.error}>{errors.min_height}</p>)} 
       
    
   
     <label className={s.subtitle}>Max height   </label>
         <input
         className={s.insideinput}
         type= "number"
         max="80"
         value= {input.max_height}
         name="max_height" 
         onChange = {(e) => handleChange(e)}/>
         <label className={s.subtitend}> cms </label>
          {errors.max_height && (<p className={s.error}>{errors.max_height}</p>)} 
         

     
    <label className={s.subtitle} >Picture   </label>
     <input
       className={s.insideinput}
       type= "url"
       value= {input.image}
       name="image" 
       onChange = {(e) => handleChange(e)}/>
 

  
        <label className={s.subtitle}> Temperaments   </label> 
        <select className={s.selectinside} value= {input.temperament} onChange = {(e)=> handleSelect(e)}>
         {temperaments.map((el) => (<option value={el.name}> {el.name} </option>))}
        <ul> <li> {input.temperament.map(el => el + ", ")} </li></ul>
        {errors.temperament && (<p className={s.error}>{errors.temperament}</p>)}
        </select>

        <div className={s.tres}>
    <button className={s.btn} disabled={Object.keys(errors).length > 0 || input.temperament.length === 0 ? true : false} type ='submit'> <p><img src={ok} width="40px" height="40px" /> CREATE </p> </button>          
         <Link to="/dogs">
        <button className={s.btn}><p><img src={back} width="40px" height="40px"/>BACK </p></button>
        </Link>
        </div>

        </form>


         </div>
        
        
         </div>
         <div className={s.boxremove}>
         <p>Temperaments: </p>
     <ul >
    {input.temperament.map(el=>  <li className={s.remove}> {el} <button className= {s.btnremove} onClick={() => handleDelete(el)}> 
<img src={Remove} height= "15px" weight= "15px"alt="delete"/> </button></li> )}
    </ul>
 </div>
 </div>
        </div>
    
      
    )
}




 
 

export default CreateDog
