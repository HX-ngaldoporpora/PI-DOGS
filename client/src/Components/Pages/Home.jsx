import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllDogs, getTemperaments, filterByTemperaments, filterCreated, orderByName, orderByWeight} from '../../Actions';
import Card from '../Card'
import Nav from '../Nav'
import Pagination from '../Pagination';
import SearchBar from '../../Components/SearchBar';
import Reload from '../Img/reload.png'
import load from '../Img/loading.gif'
import s from '../Styles/Home.module.css'




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

//filter by temperaments
const temperaments = useSelector ((state) => state.temperaments)
const [temperament, setTemperament] = useState("All")
function handleSelect(e){
    e.preventDefault()
    dispatch(filterByTemperaments(e.target.value))
    setTemperament(e.target.value)
    setCurrentPage(1)
}

function handleClick(e){
    e.preventDefault();
    dispatch(getAllDogs());
    setCurrentPage(1)
    
}


//Filter by Breeds
const [breeds, setBreeds] = useState('All')
function handleFilterCreated (e){
    e.preventDefault();
    dispatch(filterCreated(e.target.value))
    setCurrentPage(1)
    setBreeds(e.target.value)
    
}
 //Order by alphabet
 const [orden,setOrden] = useState('')
 function handleSort (e){
     e.preventDefault()
     dispatch(orderByName(e.target.value))
     setCurrentPage(1)
     setOrden(`Ordenado ${e.target.value}`)
   
 }

 //Ordenamiento por peso
 const [ordenPorPeso, setOrdenPorPeso] = useState('')
 function handleSortWeight(e){
    e.preventDefault()
    dispatch(orderByWeight(e.target.value))
    setCurrentPage(1)
       setOrdenPorPeso(e.target.value)
}

useEffect (() => {
    dispatch (getAllDogs())
    dispatch(filterByTemperaments())
    dispatch(getTemperaments())
}, [dispatch])

    return (
        <div className={s.gral}>
            <div className={s.head}> 
            <div> <Nav/> </div> 
             <div className={s.inhead}> 
             <button className={s.btn}  onClick = {e=>{handleClick(e)}}> <img src={Reload}  weight="40px" height="40px" alt= "Refresh"/> </button>
             <SearchBar/>
             </div>
                      
            </div>
            <div className={s.container}>
            <div className={s.filtros}>
            
            <div >     
        <select className={s.filters} onClick = {(e) =>  handleSortWeight(e)}>
            <option value = "asc"> Lighters </option>
            <option value = "desc"> Heaviers </option>
        </select>
        </div>  
        <div >  
        <select className={s.filters} onChange = {e => handleSort(e)}>
            <option value = "az"> A-Z</option>
            <option value = "za"> Z-A </option>
        </select>
        </div>
        <div >     
        <select className={s.filters} onChange = {(e) => {handleFilterCreated(e)}}> 
            <option value = "all">Breeds</option>
            <option value = "created">Created Breeds</option>
            <option value = "api"> Existent Breeds</option>
        </select>
        </div>
        <div> 
        <select  className={s.filters} value = {temperament} onChange = {(e)=> handleSelect(e)}>
        <option value="All"> Temperaments </option>
                    {temperaments.map((temp, index) => (
                      <option onClick = {(e)=> handleClick(e)} key={index}>
                        {temp.name}
                      </option>
                    ))}
        </select>   
        </div>
        </div>
        <div className={s.divcard} > 
        {currentDog.length === 0 ? <div className={s.loading}><img className={s.imgload} src={load} alt="LOADING" /></div>: currentDog.map(el=> {
            return(
                <div>
                       
                   <Card
                   name = {el.name}
                   image = {el.image}
                   key = {el.id}
                   id = {el.id}
                   max_weight = {el.max_weight}
                  
                   />
                   </div>
            )
        })
        }
       </div> 
       </div>
       <div className={s.paginado}>
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
/* <Link to ={`/dogs/${el.id}`} > 
 </Link>*/