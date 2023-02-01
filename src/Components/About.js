import React from "react";
import logo from "C:/Users/faisa/Desktop/Portfolio/portfolio/src/images/mw60217.jpg"
export default function About(){
    return(
    <div className="outter-about">
        <div className="about">
            <img className="photo" src={logo}/>
            <div className="info">
                <h1>Faisal AlYahya</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quo, soluta quidem atque exercitationem, voluptatum sunt, optio ipsum dolor rem dolore! Dolor ipsam porro placeat cupiditate, architecto cum suscipit. Veritatis.</p>
                <ul className="about-info">
                    <li><img/> 29th January, 2002</li>
                    <li><img/>+966505227822</li>
                    <li><img/>fyalyahya@gmail.com</li>
                </ul>
            </div>
        </div>
    </div>
    )
}