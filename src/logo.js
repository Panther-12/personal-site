/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "./images/logo.png"


class Logo extends React.Component{
    render(){
        return(
            <div className="logo-wrapper">
                <img src={logo}></img>
            </div>
        );
    }
}

export default Logo;