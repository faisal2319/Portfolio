import React from "react";
import './style.css'
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import data from "./data";
import Contact from "./Components/Contact";

export default function App(){

    const project = data.map(item =>{
        return(
            <Projects 
                key={item.id}
                {...item}
                
            />
        )
    })



    return(
        <div className="main">
            <Navbar/>
            <div className="content">
                <About/>
                <div className="project-section" >
                    {project}
                </div>
            </div>
            <Contact/>
            
        </div>
        )
}