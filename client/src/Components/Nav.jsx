import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import SearchBar from './SearchBar';
import {getAllDogs} from '../Actions'


function Nav() {
const dispatch = useDispatch()


//Refresh
function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
}
useEffect (() => {
    dispatch (getAllDogs())
}, [dispatch])

    return (
        <div>
            <SearchBar/>
            <Link to= '/about'> ABOUT </Link>
            <Link to= '/dogs'> HOME </Link>
            <Link to= '/favorites'> FAVORITES </Link>
            <button  onClick = {e=>
{handleClick(e)}}> Refresh </button>
        </div>
    )
}

export default Nav
