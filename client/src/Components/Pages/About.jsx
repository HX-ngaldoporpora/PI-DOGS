import React from 'react'
import Nav from '../Nav'
import linkedIn from '../Img/LinkedIn.png';
import gitHub from "../Img/githun.png"
import s from '../Styles/About.module.css'

function About() {
    return (
        <div className={s.gral}>
            <Nav/>
            <div className={s.texto}>
            
<h2>DATAWOOF is the world's largest encyclopedia of dog breeds. <br/>It is characterized by providing the user with the most up-to-date and detailed information on the canine world.<br/>
It allows the user:<br/>
Filter by temperaments, as well as existing or created breeds.<br/>
Sort all dog breeds, or any of the chosen filters, according to alphabetical order or by weight.<br/>
Search by breed name.<br/>
Save the chosen race in favorites ... and delete it if you have changed your mind!<br/>
Welcome to DATAWOOF.</h2>
</div>
            <div>
            <a href="https://github.com/NaGaldo"><img src={gitHub} width="80px" height="80px" alt="github"/> </a>
            <a href="https://www.linkedin.com/in/natalia-galdoporpora-0029a5220"><img src={linkedIn} width="80px" height="80px"alt="linkedin"/> </a>
            <h3>Natalia Galdoporpora</h3>
            </div>
            
        </div>
    )
}

export default About
