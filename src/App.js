import React from "react";
import './style.css'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
export default function App(){
    return(
        <div className="main">
            <Navbar/>
            <div className="content">
                <About/>
                <div className="project-section">
                    <Projects/>
                    <Projects/>
                    <Projects/>
                </div>
            </div>
            
            
        </div>
        )
}