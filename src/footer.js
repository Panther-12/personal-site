/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


// Footer component
class Footer extends React.Component{
    render(){
        return(
            <div className="footer-wrapper" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col phone-wrapper">
                            <p>The contacts can be used to reach me in case of any inquiries related or not to the site. Feel free to reach out and get answers to your questions.</p>
                            <a href="">+254740837666</a> 
                            <a href="">nimrodwalwe@gmail.com</a>
                        </div>
                        <div className="col form-wrapper">
                            <form method="post">
                                <input type="text" className="form-control" placeholder="Enter Name"></input>
                                <input type="email" className="form-control" placeholder="Enter Email"></input>
                                <textarea placeholder="Comment about the site"></textarea>
                                <button type="submit" className="btn btn-primary mt-2">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;