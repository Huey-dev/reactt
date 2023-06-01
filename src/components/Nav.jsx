import React from "react";
import ReactLogo from '../Images/icon.png'
export default function Nav() {
    return(
        <nav>
            <img src={ReactLogo} alt="" className="nav-logo"/>
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project</h4>
        </nav>
    )
}