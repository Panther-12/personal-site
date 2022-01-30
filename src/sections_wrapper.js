/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react"
import owner from "./images/owner.jpg"
import * as Icon from 'react-bootstrap-icons'

// Class based components
// It inherits from the main app component
// The componet is rendered first before returning any html components
// "this" is used similar to self in python
class Sections extends React.Component{
    render(){
        return(
            <div className="sections-wrapper">
                <div className="menu" id="open" onClick={()=>{
                    try{
                    document.querySelector('.top-nav-wrapper').style.width='300px';
                    }
                    catch(error){
                        console.log(error)
                    }
               } }><Icon.List/></div>
                <section id="home">
                    <div className="container">
                        <div className="row title-wrapper">
                            <p className="row title title-1">WELCOME TO </p>
                            <div className="background-wrapper"></div>
                            <p className="row title title-2">CODEWITHNIMROD</p> 
                        </div>
                        <div className="background-wrapper"></div>
                        <div className="row site-info">
                            <p>This is a site entailing my journey as a programmer and software developer. I started coding at a younger age of 14 years ( basic html syntax). The fascination led me to learn more languages and web technologies in computing. In this site i have detailed some of the projects i worked on and continue working on based on the different fields i ventured over the years. Gaming, machine learning, data analytics and web application development are the major areas with some minor added. I hope you get a nice experience while using the site.</p>
                        </div>
                        <div className="row mt-3 home-buttons-wrapper">
                            <button className="btn btn-secondary col-2"><a href="#tutorials">TAKE A TRIP</a></button>
                            <button className="btn btn-secondary col-2 contact-me"><a href="#contact">CONTACT ME</a></button>
                        </div>
                    </div>
                </section>
                <section id="tutorials">
                    <div className="container">
                        <div className="row row-1">
                            <p>TUTORIALS</p>
                        </div>
                        <div className="row row_2">
                            <div className="col">
                                <h5>WEB SCRIPTING</h5>
                                <a href="https://github.com/Panther-12/Express-js-tutorials">HTML</a>
                                <a href="https://github.com/Panther-12/Express-js-tutorials">CSS</a>
                            </div>
                            <div className="col">
                                <h5>PROGRAMMING LANGUAGES</h5>
                                <a href="https://github.com/Panther-12/Python-data-structures-and-Algotithms">Python </a>
                                <a href="https://github.com/Panther-12/Express-js-tutorials">Javascript</a>
                            </div>
                            <div className="col">
                                <h5>WEB FRAMEWORKS</h5>
                                <a href="https://github.com/Panther-12/Express-js-tutorials">Flask backend framework</a>
                                <a href="https://github.com/Panther-12/NODE-JS-TUTORIAL-">Node backend framework</a>
                                <a href="https://github.com/Panther-12/Express-js-tutorials">Express framework</a>
                                <a href="https://github.com/Panther-12/1.1-PORTFOLIO-SITE-PROJECT">React frontend framework</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <h5>More about the developer!</h5>
                        </div>
                        <div className="row " id="row2">
                            <div className="col image-column">
                                <img src={owner}></img>
                            </div>
                            <div className="col info-column">
                                <p>I started coding at 14 years in junior highschool. The basic HTML and CSS syntax made me crave for more in the field of computing and at 17years studied python programming language. Being my favorite language i decided to research different ways of incoorporating it in my projects and it was at this moment that i was introduced to web frameworks. Later on i learnt how to mine data online and carry out analysis using various python libraries. My four year coding journey has been tough but as one person said motivation is doing what you dont like keeping in mind that it adds up to your long term goal. </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Sections;
