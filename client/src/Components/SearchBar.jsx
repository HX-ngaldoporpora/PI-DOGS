import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {getNameDog} from '../Actions';
import s from './Styles/SearchBar.module.css'
import Lupa from './Img/lupa.png'

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
       return alert ("Please write a breed")
   } else{
       dispatch(getNameDog(name));
       setName("")
      }
     }
     
    return (
      
            <div className={s.gral}>
                <input
                className={s.searchinput}
                type = "text"
                placeholder='Search...'
                value={name}
                autoComplete='off'
                onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                onChange = {(e) => handleInputChange(e)}
                />
                <button type = 'submit' className={s.btn}
                onClick = {(e) => handleSubmit(e)}> <img src={Lupa} alt="buscar" weight="30px" height="30px"/> </button>
                </div>
         
     
     
     
     
     
     
     
     
     
    )
}

export default SearchBar
