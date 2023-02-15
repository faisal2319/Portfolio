import React from "react";

export default function Projects(props){
    const [info, setInfo] = React.useState(false)

    const handleMouseOver = () => {
        setInfo(true)
    }


    const handleMouseOut = () => {
        setInfo(false)
        
    }



    return(
        <div className="projects" id="Project" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            {info && (<div className="project-info">
                    <h1>{props.Title}</h1>
                    <p>{props.Description}</p>
                </div>)}
                
            
        </div>
    )
}