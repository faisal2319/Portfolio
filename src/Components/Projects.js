import React from "react";
import bi from "C:/Users/faisa/Desktop/Portfolio new/Portfolio/src/images/to-do-list.jpg";
export default function Projects(props){
    const [info, setInfo] = React.useState(false)

    const handleMouseOver = () => {
        setInfo(true)
    }


    const handleMouseOut = () => {
        setInfo(false)
        
    }



    return(
        <div style={{backgroundImage: `url(${bi})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}className="projects" id="Project" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            
            {info && (<div className="project-info">
                    <h1>{props.Title}</h1>
                    <p>{props.Description}</p>
                </div>)}
                
            
        </div>  
    )
}