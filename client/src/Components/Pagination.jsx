import React from 'react'

function Pagination({dogsPerPage, allDogs, paginado }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {pageNumbers?.map(number => (
                    <li key={number}>
                        <a onClick = {() => paginado(number)}>
                            {number}
                        </a>
                    </li>
                    ))} </ul>
                 
                 
        </nav>
    ) 
}

export default Pagination
