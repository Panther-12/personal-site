/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from "react"
import owner from "./images/owner.jpg"

// Class based components
// It inherits from the main app component
// The componet is rendered first before returning any html components
// "this" is used similar to self in python
class Sections extends React.Component{
    render(){
        return(
            <div className="sections-wrapper">
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
                                <h5>WEB DEVELOPMENT</h5>
                                <p>Web development refers to the design and of websites and web applications. In this section i have discussed various web technologies that will enable you create your own websites and web applications. The lessons are well structured to accomodate beginners and have clearly outlined topics in each timestamp.</p>
                                <div className="menu">
                                    <a href="">HTML</a>
                                    <a href="">CSS</a>
                                    <a href="">Flask backend framework</a>
                                    <a href="">React frontend framework</a>
                                </div>
                            </div>
                            <div className="col">
                                <h5>PROGRAMMING LANGUAGES</h5>
                                <p>A programming language is a language used to write instruction to a computer. There exists hundreds of programming languages but some among them emerge as the best in terms of flexibility and understandibility. In this section lessons concerning two high level languages are discussed, that is, javascript and python. The lessons are comprehensive and start from basics to very advanced concepts.</p>
                                <div className="menu">
                                    <a href="">Basic Python Concepts</a>
                                    <a href="">Basic Javascript Concepts</a>
                                </div>
                            </div>
                            <div className="col">
                                <h5>MACHINE LEARNING AND DATA ANALYSIS</h5>
                                <p>This section talks about machine learning and data science concepts with python as the base language. Build your own neural network, mine data sets to train the model and test it with real life instances to determine its accuracy.</p>
                                <div className="menu">
                                    <a href="">Tensorflow Library</a>
                                    <a href="">Matplotlib</a>
                                    <a href="">Keras</a>
                                    <a href="">Web Scraping</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div className="container">
                        <div className="row">
                            <h5>More about the developer!</h5>
                        </div>
                        <div className="row">
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