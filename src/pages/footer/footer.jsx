import React from 'react'
import '../../reset.css'
import { BsInstagram } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { BsHouseAdd } from 'react-icons/bs'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
        <div className="footer">
            <div className="govtech-drive">
                <h2 className="govtech-header">
                    Govtech
                </h2>
                <p className="drive">We are driven by the relentless pursuit of perfection in every aspect of our operations.</p>
            </div>
            <div className="footer-navs">
                <div className="company">
                    <h3 className="company-header">Company</h3>
                    <ul className="company-links">
                        <li className='company-link'>About</li>
                        <li className='company-link'>Offering</li>
                        <li className='company-link'>Team</li>
                    </ul>
                </div>
                <div className="help">
                    <h3 className="help-header">Help</h3>
                    <ul className="help-links">
                        <li className="help-link">Customer Support</li>
                        <li className="help-link">Terms & Conditions</li>
                        <li className="help-link">PrivacyPolicy</li>
                    </ul>
                </div>
                <div className="contact">
                    <h3 className="contact-us">Contact Us</h3>
                    <p className="tel"> <BsTelephoneFill/>+234 09060490067</p>
                        <p className="email"> info@govtechafrica.com</p>
                        <p className="instagram"><BsInstagram/> govtech_africa</p>
                        <p className="location"><BsHouseAdd/> Plot 453 F, bob Marley Crescent, !4 Road, Gwarinpa, FCT-Abuja</p>
                </div>
            </div>
        </div>
    </div>
  )
}
