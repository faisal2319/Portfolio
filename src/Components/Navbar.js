import React from "react";
import {Link} from 'react-scroll'

export default function Navbar(){
   
    
    return(
        <div className="navbar">
            <img className="logo"/>
            <ul className="nav-list">
                <li  name="Projects"><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                <li name="About"><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                <li name="Contact"><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>
        </div>
    )
}