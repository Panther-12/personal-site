/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react"
import Logo from "./logo"

// Class based components
// It inherits from the main app component
// The componet is rendered first before returning any html components
// "this" is used similar to self in python
class Top_nav extends React.Component{
    render(){
        return(
            <div className="top-nav-wrapper">
                <div className="left-side">
                    <a href="#home">HOME</a>
                    <a href="#tutorials">TUTORIALS</a>
                    <a href="#about">ABOUT</a>
                    <div className="nav_btn"  onClick={()=>{
                        try {
                            document.querySelector('.top-nav-wrapper').style.width = '0';
                       } catch (error) {
                            console.log(error);
                        }

                        }}>CLOSE
                    </div>
                </div>
            </div>
        );
    }
}
export default Top_nav;