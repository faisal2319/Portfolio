import React from "react";


export default function Navbar(){
    return(
        <div className="navbar">
            <img className="logo"/>
            <ul className="nav-list">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}