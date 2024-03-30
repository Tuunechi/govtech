import React from "react";
import './contact.css'
import '../../reset.css'
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";


export default function Contact (){
    return(
        <div>
            <Navbar/>
            <div className="contact-page">
                <h2 className="contact-us-header">Contact Us</h2>
                <p className="reach-us">You can reach us anytime via <span className="reach-us-email">info@govtech.com</span></p>

                <div className="contact-form-wrap">
                  <form action="" className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="you@company.com"/>
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" placeholder="+234 000000000"/>
                    <label htmlFor="our-help">How can we help?</label>
                    <textarea type="text" id="our-help" placeholder="Tell us about the project"/>
                  </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
    
}