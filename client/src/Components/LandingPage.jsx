import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Styles/LandingPage.module.css'

export default function LandingPage () {
    return (
        <div >
           <Link to= "/dogs">
                <h1 >Welcome!</h1>
            </Link>
        </div>
    )
}