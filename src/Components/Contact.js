import React from "react";
import linkedIn from "C:/Users/faisa/Desktop/Projects/portfolio 1/Portfolio/src/images/linkedIn.png"
import Gmail from "C:/Users/faisa/Desktop/Projects/portfolio 1/Portfolio/src/images/Gmail-.png"
import GitHub from "C:/Users/faisa/Desktop/Projects/portfolio 1/Portfolio/src/images/GitHub.png"

export default function Contact(){
    return(
        
            <ul className="contact-ul" id="contact">
                <li><a href="https://www.linkedin.com/in/faisal-alyahya-781515225/" target="_blank"><img src={linkedIn} className="contact-info" /></a></li>
                <li><a id="mailto" href="mailto:fyalyahya@gmail.com" target="_blank"><img className="contact-info" src={Gmail}/></a></li>
                <li><a href="https://github.com/faisal2319" alt="" target="_"> <img className="contact-info" src={GitHub}/></a></li>
            </ul>
            
        
    )
}