import Navbar from "../navbar/navbar";
import heroImage from "./images/hero-image.png"
import '../../reset.css'
import './home.css'
import { BsBox } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import navImage from "./images/home-circles.svg"
// import coreValue from "./images/core-values.svg"
import Footer from "../footer/footer";


export default function home (){
    return(
        <div className="home">
            <div className="nav-design-wrapper">
                <img src={navImage} className="nav-design" alt="nav design" />
            </div>
            <Navbar/>
            <div>
                <div className="hero-page">
                    <div className="hero-details">
                        <h2 className="hero-details-header">
                          Building Innovative <span className="hero-span">Solutions</span> for Government Projects
                        </h2>
                        <p className="hero-paragraph">Revolutionizing governance through innovative solutions tailored for the African continent</p>
                        <button className="learn-more">Learn More</button>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src={heroImage} className="hero-image" alt="hero image" />
                    </div>
                </div>
            </div>
            <div className="key-features">
                <h2 className="key-features-header">Our Key Offerings</h2>
                <p className="key-features-details">Explore what sets our government projects apart</p>
                <div className="our-services">
                    <div className="IT">
                      <BsBox className="box"/>
                        <div className="IT-group">
                         <h2 className="IT-header">
                            IT Infrastructure Development and Customized  E-Government Solutions
                         </h2>
                         <p className="IT-details">We offer a comprehensive suite of customized e-government solutions and IT
                         infrastructure development services designed to streamline administrative processes, enhance citizen engagement, improve decision-making processes, and foster greater 
                         transparency and accountability within government institutions.</p>
                         </div>
                    </div>
                    
                    <div className="cyber-security">
                      <BsBox className="box"/>
                        <div className="cyber-security-group">
                        <h2 className="cyber-security-header">
                          Cybersecurity and Data Management Services
                        </h2>
                        <p className="cyber-security-details">we offer cutting-edge cybersecurity services, including threat
                           detection, prevention, and response, to safeguard sensitive data and networks within government institutions, international organizations, and other non-core government
                           bodies.
                        </p>
                        </div>
                    </div>
                    <div className="cloud">
                      <BsBox className="box"/>
                        <div className="cloud-group">
                        <h2 className="cloud-header">
                          Cloud Computing and Network Infrastructure Solutions
                        </h2>
                        <p className="cloud-details">Govtech Africa is at the forefront of providing cloud computing solutions to government bodies. We specialize in enabling optimized resource utilization, enhancing
                         collaboration, and ensuring accessibility of services.</p>
                         </div> 
                    </div>
                    
                    <div className="support">
                    <BsBox className="box"/>
                        <div className="support-group">
                        <h2 className="support-header">
                            Remote IT Support and Sustainable Practices
                        </h2>
                        <p className="support-details">Govtech Africa offers timely and effective remote IT support services, ensuring minimal
                          downtime and optimal performance for government IT systems promoting sustainable and environmentally friendly IT practices within government
                          institutions.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="explore-more-features"><button>Explore more<BsArrowRight className="btn-arrow"/></button></div>
            </div>

            <div className="core-values-wrapper">
                <h2 className="core-values-header">Core Values</h2>  
                <div className="core-values">
                    <div className="each-value core-1">
                        <h2 className="value-id">01</h2>
                        <h2 className="value-header">Innovation</h2>
                        <p className="value-details">We embrace innovation and creativity as catalysts for positive change and continuous improvement.</p>
                    </div>
                    <div className="each-value core-2">
                        <h2 className="value-id">02</h2>
                        <h2 className="value-header">Integrity</h2>
                        <p className="value-details">We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions.</p>
                    </div>
                    <div className="each-value core-3">
                        <h2 className="value-id">03</h2>
                        <h2 className="value-header">Collaboration</h2>
                        <p className="value-details">We believe in the power of collaboration and partnerships to achieve shared goals and drive collective impact.</p>
                    </div>

                    <div className="empowerment-and-impact-group">
                    <div className="each-value core-4">
                        <h2 className="value-id">04</h2>
                        <h2 className="value-header">Empowerment</h2>
                        <p className="value-details">We are committed to empowering governments and citizens with the tools and knowledge they need to thrive in the digital age.</p>
                    </div>
                    <div className="each-value core-5">
                        <h2 className="value-id">05</h2>
                        <h2 className="value-header">Impact</h2>
                        <p className="value-details">We measure our success by the impact we create, both in terms of tangible outcomes and positive societal change.</p>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
} 