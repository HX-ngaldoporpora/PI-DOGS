import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {getNameDog} from '../Actions';

function SearchBar() {

const dispatch = useDispatch()
const [name, setName] = useState("")

function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
          }

function handleSubmit(e){
   e.preventDefault();
   if(name.length === 0) {
       return alert ("Please write a name")
   } else{
       dispatch(getNameDog(name));
       setName({
           name: ""
       })
      }
     }
     
    return (
        <div>
            <input 
             type = "text"
             
             placeholder="Search by breed's name..."
             onChange = {(e) => handleInputChange(e)}/>
             <button 
             value= "name"
             type = 'submit'
             onClick = {(e) => handleSubmit(e)}>
                 Search
            </button>
        </div>
    )
}

export default SearchBar
