import React from "react";
import logo from './logo.svg';
import './Styles.css'




function Header(){
    return(
        
            <nav className="nav">
            <img src={logo} className="nav-logo" alt="logo" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project1</h4>
            {/* <ul className="nav-items "> */}
                {/* <li>Pricing</li>
                <li>About</li>
                <li>Contact</li> */}
            {/* </ul> */}

            </nav>
      
    )
}
export default Header;