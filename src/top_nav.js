/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react"
import logo from "./images/logo.png"

// Class based components
// It inherits from the main app component
// The componet is rendered first before returning any html components
// "this" is used similar to self in python
class Top_nav extends React.Component{
    render(){
        return(
            <div className="top-nav-wrapper">
                <div className="logo-wrapper">
                    <img src={logo}></img>
                </div>
                <div className="left-side">
                    <a href="#home">HOME</a>
                    <a href="#tutorials">TUTORIALS</a>
                    <a href="#about">ABOUT</a>
                </div>
                <div className="right-side">
                    <a href="#">NIMROD</a>
                </div>
            </div>
        );
    }
}
export default Top_nav;