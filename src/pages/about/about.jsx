import React from 'react'
// import '../../reset.css'
import './about.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import aboutHeroImage from './images/about-hero.png'
import ourMissionImage from './images/our-mission.png'
import ourVisionImage from './images/our-vision.png'

export default function About() {
  return (
    
    <div>
        <Navbar/>
        <div className="about-hero">
            <div className="about-hero-text">
            <p className="paragraph-1">Govtech Africa Inc. is a consortium of leading tech conglomerates that operate within
              the European and African markets. At Govtech Africa, we deliver tier one technology
              systems development and deployment, among a bevy of other associated services to
              institutions and agencies of government all across the African continent.
            </p>
            <p className="paragraph-2">Established with a vision to harness the
              power of technology for societal advancement, and a commitment to driving positive
              change and fostering transparent, efficient, and inclusive governance practices,
              Govtech Africa empowers African governments to better serve their constituents, thus
              building thriving, resilient societies.
            </p>
            </div>

            <div className="about-hero-image-wrapper">
                <img src={aboutHeroImage} alt="About Image" className="about-hero-image" />
            </div>
        </div>
        <div className="our-mission">
            <h2 className="our-mission-header">Our Mission</h2>
            <div className="our-mission-details">
                <div className="our-mission-image-wrapper">
                    <img src={ourMissionImage} alt="our mission image" className="our-mission-image" />
                </div>
                <div className="our-mission-text-wrapper">
                    <p className="our-mission-text">Our mission is to provide state-of-the-art technological solutions to governments and
                     public institutions in order to improve transparency, efficiency, and citizen participation.
                     We believe we can build a future where governance is inclusive, accountable, and responsive by utilizing cutting-edge technologies and encouraging cooperation
                     between individuals, governments, and technology partners.
                    </p>
                </div>
            </div>
        </div>    
        <div className="our-vision">
            <h2 className="our-vision-header">Our Vission</h2>
            <div className="our-vision-details">
                <div className="our-vision-image-wrapper">
                    <img src={ourVisionImage} alt="our vision image" className="our-vision-image" />
                </div>
                <div className="our-vision-text-wrapper">
                    <p className="our-vision-text">Our mission is to provide state-of-the-art technological solutions to governments and
                     public institutions in order to improve transparency, efficiency, and citizen participation.
                     We believe we can build a future visionwhere governance is inclusive, accountable, and responsive by utilizing cutting-edge technologies and encouraging cooperation
                     between individuals, governments, and technology partners.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
