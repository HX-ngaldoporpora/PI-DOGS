import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {getNameDog} from '../Actions';

function SearchBar() {

const dispatch = useDispatch()
const [name, setName] = useState("")

function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
        dispatch(getNameDog(name));
          }

function handleSubmit(e){
   e.preventDefault();
   if(name.length === 0) {
       return alert ("Please write a breed")
   } else{
       dispatch(getNameDog(name));
       setName("")
      }
     }
     
    return (
      
            <div>
                <input
                type = "text"
                placeholder='Search by breed...'
                value={name}
                autoComplete='off'
                onChange = {(e) => handleInputChange(e)}/>
                
                <button type = 'submit'
                onClick = {(e) => handleSubmit(e)}> <img src= "https://img.icons8.com/material-outlined/24/ffffff/search--v1.png" alt="buscar"/> </button>
            </div>
         
     
     
     
     
     
     
     
     
     
    )
}

export default SearchBar
