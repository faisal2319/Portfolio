import React from "react";

export default function Projects(props){
    return(
    
        
        <div className="projects">
        
                <div className="project-info">
                    <h1>{props.Title}</h1>
                    <p>{props.Description}</p>
                </div>
            
        </div>
    )
}