import React from 'react'
import s from './Styles/Pagination.module.css'

function Pagination({dogsPerPage, allDogs, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            
            <ul className={s.pagination}>
                {pageNumbers?.map(number => (
                    <li key={number}>
                         <button className={s.activa} onClick = {() => paginado(number)}>
                         {number}
                        </button>
                    </li>
                    ))} </ul>
                 
                 
        </nav>
    ) 
}

export default Pagination
