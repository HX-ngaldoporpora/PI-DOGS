import React from 'react';
import {Link} from 'react-router-dom';

export default function LandingPage () {
    return (
        <div >
           <Link to= "/dogs">
                <h1 >Welcome!</h1>
            </Link>
        </div>
    )
}