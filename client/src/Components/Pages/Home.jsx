import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {getAllDogs, getTemperaments, filterByTemperaments, filterCreated, orderByName, orderByWeight} from '../../Actions';
import Card from '../Card'
import Nav from '../Nav'
import Pagination from '../Pagination';
import SearchBar from '../../Components/SearchBar';
import FavoritesActions from '../FavoritesActions';


function Home() {

const dispatch = useDispatch()
const allDogs = useSelector ((state) => state.dogs)

//paginado
const [currentPage, setCurrentPage] = useState(1)
const [dogsPerPage, setDogsPerPage] = useState(8)
const numbersOfLastDog = currentPage * dogsPerPage
const numberOfFirtsDog = numbersOfLastDog - dogsPerPage
const currentDog = allDogs.slice(numberOfFirtsDog, numbersOfLastDog)
const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
}

//filter by temperaments
const temperaments = useSelector ((state) => state.
temperaments)
const [temperament, setTemperament] = useState("All")
function handleSelect(e){
    e.preventDefault()
    dispatch(filterByTemperaments(e.target.value))
    setTemperament(e.target.value)
}
function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
}


//Filter by Breeds
const [breeds, setBreeds] = useState('All')
function handleFilterCreated (e){
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
    setBreeds(e.target.value)
}
 //Order by alphabet
 const [orden,setOrden] = useState('')
 function handleSort (e){
     e.preventDefault()
     dispatch(orderByName(e.target.value))
     setOrden(`Ordenado ${e.target.value}`)
 }

 //Ordenamiento por peso
 const [ordenPorPeso, setOrdenPorPeso] = useState('')
 function handleSortWeight(e){
    e.preventDefault()
    dispatch(orderByWeight(e.target.value))
     setOrdenPorPeso(e.target.value)
}

useEffect (() => {
    dispatch (getAllDogs())
    dispatch(filterByTemperaments())
    dispatch(getTemperaments())
}, [dispatch])

    return (
        <div>
            <SearchBar/>
            <Nav/>
      
            <button  onClick = {e=>{handleClick(e)}}> REFRESH </button>
            <div>     
        <select onClick = {(e) =>  handleSortWeight(e)}>
            <option value = "asc"> Peso ascendente </option>
            <option value = "desc"> Peso descendente </option>
        </select>
        </div>  
        <div>  
        <select onChange = {e => handleSort(e)}>
            <option value = "az"> A-Z</option>
            <option value = "za"> Z-A </option>
        </select>
        </div>
        <div>     
        <select onChange = {(e) => {handleFilterCreated(e)}}> 
            <option value = "all">Breeds</option>
            <option value = "created">Created Breeds</option>
            <option value = "api"> Existent Breeds</option>
        </select>
        </div>
        <div> 
        <select value = {temperament} onChange = {(e)=> handleSelect(e)}>
        <option value="All"> Temperaments </option>
                    {temperaments.map((temp, index) => (
                      <option onClick = {(e)=> handleClick(e)} key={index}>
                        {temp.name}
                      </option>
                    ))}
        </select>   
        </div>
        <div> 
        {currentDog?.map(el=> {
            return(
                <div>
                 <Link to ={`/dogs/${el.id}`}>
                     <Card
                     name = {el.name}
                     image = {el.image}
                     key = {el.id}
                     />
                 </Link>
                 <FavoritesActions 
                    id = {el.id}
                    name = {el.name}
                    image = {el.image}
                />
                </div>
            )
        })
        }
       </div> 
       <div>
        <Pagination
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
        />
        </div>
        </div>
    )
        
}

export default Home
