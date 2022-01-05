import React, {useState, useEffect} from 'react'
import Nav from '../Nav'
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";
import {postDog, getTemperaments} from '../../Actions';

function validate (input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"
    }
    if (!input.life_span){
        errors.life_span = "Life span is required"
    }
    if (input.life_span < 0 && input.life_span > 30){
        errors.life_span = "Life span must be between 1 and 30 years"
    }
    if (input.min_height < 10){
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
    }
    if(input.min_height > input.max_height){
    errors.max_height = "Max height must be higher than min height"
    }
    if(input.min_weight > input.max_weight){
        errors.max_weight = "Max weight must be heavier than min weight"
    }
    /*if(input.temperament = []) {
        errors.temperament = "Please, choose a temperament"
    }     */          
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
    setInput({
        ...input,
        temperament:[...input.temperament, e.target.value]
    })
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
        <div>
           <Nav/>
            <h1> CREATE YOUR OWN DOG'S BREED </h1>

        <form onSubmit={e => {handleSubmit(e)}}>
        
        <div>
        <label>Name</label>
            <input
            type= "text"
            value= {input.name}
            name="name" 
            onChange = {(e) => handleChange(e)}/>
            {errors.name && (<p>{errors.name}</p>)} 
        </div>
        
        <div>
        <label>Life Span   </label>
        <input
             type= "number"
             value= {input.life_span}
             name="life_span" 
             onChange = {(e) => handleChange(e)}/>
             <label> years </label>
             {errors.life_span && (<p>{errors.life_span}</p>)} 
        </div>
       

        <div>
        <label>Picture   </label>
         <input
           type= "url"
           value= {input.image}
           name="image" 
           onChange = {(e) => handleChange(e)}/>
        {errors.image && (<p >{errors.image}</p>)} 
        </div> 

        <div>
        <label>Min weight   </label>
            <input
            type= "number"
            min="1"
            value= {input.minweight}
            name="min_weight" 
            onChange = {(e) => handleChange(e)}/>
            <label> kgs </label>
         {errors.min_weight && (<p>{errors.min_weight}</p>)}
        </div>     

        <div>
        <label>Max weight   </label>
            <input
            type= "number"
            max="100"
            value= {input.max_weight}
            name="max_weight" 
            onChange = {(e) => handleChange(e)}/>
            <label> kgs </label>
         {errors.max_weight && (<p>{errors.max_weight}</p>)} 
        </div>     
        
        <div>
        <label>Min height   </label>
         <input
         type= "number"
         min="10"
         value= {input.min_height}
         name="min_height" 
         onChange = {(e) => handleChange(e)}/>
         <label> cms </label>
        {errors.min_height && (<p>{errors.min_height}</p>)} 
        </div>     
    
     <div>
     <label>Max height   </label>
         <input
         type= "number"
         max="80"
         value= {input.max_height}
         name="max_height" 
         onChange = {(e) => handleChange(e)}/>
         <label> cms </label>
          {errors.max_height && (<p>{errors.max_height}</p>)} 
     </div>     
    
     <div>
        <label> Temperaments   </label> 
        <select value= {input.temperament} onChange = {(e)=> handleSelect(e)}>
         {temperaments.map((el) => (<option value={el.name}> {el.name} </option>))}
        <ul> <li> {input.temperament.map(el => el + ", ")} </li></ul>
        {errors.temperament && (<p>{errors.temperament}</p>)}
        </select>
    </div>

    <button  disabled={Object.keys(errors).length > 0 || input.temperament.length === 0 ? true : false} type ='submit'> 
    CREATE
    </button>          
 
          </form>

       <div >
        <ul >
       {input.temperament.map(el=>  <li > {el} <button onClick={() => handleDelete(el)}> X </button></li> )}
       </ul>
         </div>
        </div>
              
    )
}




 
 

export default CreateDog
