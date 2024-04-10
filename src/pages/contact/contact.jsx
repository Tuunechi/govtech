import React, { useState, useRef } from "react";
import './contact.css'
import '../../reset.css'
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_584aslm', 'template_080phhi', form.current, 'QC3zDzE9tArpyIDxC')
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sent successfully!")
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Error sending message, please try again!")
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <h2 className="contact-us-header">Contact Us</h2>
        <p className="reach-us">You can reach us anytime via <span className="reach-us-email">info@govtech.com</span></p>

        <div className="contact-form-wrap">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="user_email" placeholder="you@company.com" />
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" id="phone-number" placeholder="+234 000000000" />
            <label htmlFor="our-help">How can we help?</label>
            <textarea name="message" type="text" id="our-help" placeholder="Tell us about the project" />
            <button className="message-submit" type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
            <ToastContainer/>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
