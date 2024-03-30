import React from 'react'
import '../../reset.css'
import './team.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import memberImage from './images/team.png'
import twitterIcon from './images/twitter.svg'
import linkedinIcon from './images/linkedin.svg'
import Choice from './images/why-choose-us.svg'

export default function Team() {
  return (
    <div>
        <Navbar/>
        <div className="team">
            <div className="coporate-philosophy">
                <h2 className="coporate-philisophy-header">Coporate Philosophy</h2>
                <p className="coporate-philisophy-details">Established with a vision to revolutionize the digital landscape,  was founded by a group of industry experts driven by a common goal:
                 to empower businesses with impactful digital strategies. Our journey began with the belief that every brand has a unique story waiting to be told, and we set out to craft compelling
                  narratives that resonate with audiences across various platforms.</p>
            </div>

            <div className="our-team">
                <h2 className="our-team-header">Our Team</h2>
                <div className="our-team-members">
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Fortune Toma</h5>
                    <h4 className="role">CEO & Country Manager</h4>
                    <p className="member-details">Legal practitioner, Techpreneur and government relations expert</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="" className="twitter"/>
                        <img src={linkedinIcon} alt="" className="linkedin"/>
                    </div>
                    </div>
                </div>
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Benjamin Odigie</h5>
                    <h4 className="role">Chief Operations Officer (COO)</h4>
                    <p className="member-details">Legal practitioner, Techpreneur and government relations expert</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="" className="twitter"/>
                        <img src={linkedinIcon} alt="" className="linkedin"/>
                    </div>
                    </div>
                </div>
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Philip Akhilome</h5>
                    <h4 className="role">Chief Technology Officer (CTO)</h4>
                    <p className="member-details">Software Developer</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="twitter" className="twitter"/>
                        <img src={linkedinIcon} alt="linkedin" className="linkedin"/>
                    </div>
                    </div>
                </div>
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Murphy Usifo</h5>
                    <h4 className="role">Chief Product Officer (CPO)</h4>
                    <p className="member-details">Product Designer</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="" className="twitter"/>
                        <img src={linkedinIcon} alt="" className="linkedin"/>
                    </div>
                    </div>
                </div>
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Pedro Sado</h5>
                    <h4 className="role">Executive Director</h4>
                    <p className="member-details">Business Executive</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="" className="twitter"/>
                        <img src={linkedinIcon} alt="" className="linkedin"/>
                    </div>
                    </div>
                </div>
                <div className="each-member">
                    <img src={memberImage} alt="member image" className="member-image" />
                 <div className="each-member-detail">
                    <h5 className="member-name">Nuel Okolo</h5>
                    <h4 className="role">Company Secretary/ Legal Adviser</h4>
                    <p className="member-details">Legal practitioner</p>
                 <div className='member-socials'>
                        <img src={twitterIcon} alt="" className="twitter"/>
                        <img src={linkedinIcon} alt="" className="linkedin"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="why-choose-us">
            <h2 className="why-choose-us-header">Why Choose Us?</h2>
            <div className="choice-image-wrapper">
                <img src={Choice} alt="" className="why-choose-us-image" />
            </div>
        </div>
        <Footer/>
    </div>
  )
}
