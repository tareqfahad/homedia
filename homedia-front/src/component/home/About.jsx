import NavBar from './NavBar'
import './assets/homestyle.css'
import logo from '../../logo.png';
import React from 'react'

const About = () => {
    return (
        <div>
            <NavBar/>
            <div className="aboutCont">
                <div className="imgg">
            <img className="aboutImg" src={logo}/>
            </div>
            <h1 className="aboutHeader">Made by <b>'Mediars'</b></h1>
            </div>
        </div>
    )
}
export default About