import React from 'react'
import {Link} from "react-router-dom";


function Nav() {

    return (
        <div>
            <Link to = '/dogs/create'> CREATE</Link>
            <Link to= '/about'> ABOUT </Link>
            <Link to= '/dogs'> HOME </Link>
            <Link to= '/favorites'> FAVORITES </Link>
          
        </div>
    )
}

export default Nav
