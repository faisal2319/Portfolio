import React from "react";
import './style.css'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
export default function App(){
    return(
        <div className="main">
            <Navbar/>
            <About/>
        </div>
        )
}