import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Home = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        console.log(document.body.classList);
        console.log(document.querySelector('#colorlib-main-nav > .js-colorlib-nav-toggle').classList);
        document.body.classList.toggle("menu-show");
        document.querySelector('#colorlib-main-nav > .js-colorlib-nav-toggle').classList.toggle("show");
    };

    return (
        <>
            <div id="colorlib-page">
                <Header />
                <div id="colorlib-about">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">About</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-5 animate-box">
                                <div>
                                    <OwlCarousel
                                        items={1}
                                        navText={["", ""]}
                                        nav={false}
                                        autoplay={true}
                                        autoplayTimeout={5000}
                                        autoplayHoverPause={true}
                                        loop={true}
                                        dots={false}
                                        margin={8}
                                        animateOut={'fadeOut'}
                                        animateIn={'fadeIn'}>
                                        <div className="item">
                                            <img className="img-responsive about-img" src={'assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg'}
                                                alt="html5 bootstrap template by colorlib.com" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive about-img" src={'assets/images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg'}
                                                alt="html5 bootstrap template by colorlib.com" />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                            <div className="col-md-6 col-md-push-1 animate-box">
                                <div className="about-desc">
                                    <div className="owl-carousel3">
                                        <OwlCarousel
                                            animateIn={'fadeIn'}                                            
                                        >
                                            <div className="item">
                                                <h2><span>Nikunj</span><span>Dhanani</span></h2>
                                            </div>
                                            <div className="item">
                                                <h2><span>I'm</span><span>A Designer, Front-end Developer</span></h2>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                    <div className="desc">
                                        <div className="rotate">
                                            <h2 className="heading">About</h2>
                                        </div>
                                        <p>Highly Skilled and result driven Developer with 5+ years of experience managing multiple clients. Passionate and hardworking to deliver on deadlines. Strong HTML, CSS, Bootstrap, JavaScript, TypeScript and PHP programmer. Contributes specialty in search engine optimization, marketing, social media management, and audio/video integration to launch custom-tailored code for  website presence. Detailed understanding of complex, up-to-date programming languages and considerations. An innovative  approach to actualizing organizational marketing plans. Resourceful navigation of intricatefactors governing web planning, security, SEO, and Web hosting.
                                        </p>
                                        {/* <p className="colorlib-social-icons">
                                            <a href="#"><i className="icon-facebook4"></i></a>
                                            <a href="#"><i className="icon-twitter3"></i></a>
                                            <a href="#"><i className="icon-googleplus"></i></a>
                                            <a href="#"><i className="icon-dribbble2"></i></a>
                                        </p> */}
                                        <p>
                                            <Link className="btn btn-primary btn-outline" to="/contact">Contact Me!</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="colorlib-services">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Services</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="services-flex">
                                    <div className="one-third">
                                        <div className="row">
                                            <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
                                                <span>My Services</span>
                                                <h2>Here Are Some of My Skills</h2>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="rotate">
                                                    <h2 className="heading">Services</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="services animate-box">
                                                    <h3>Programming Languages</h3>
                                                    <ul>
                                                        <li>JavaScript</li>
                                                        <li>JQuery</li>
                                                        <li>ReactJs</li>
                                                        <li>SvelteJs</li>
                                                        <li>AstroJs</li>
                                                        <li>PHP</li>
                                                        <li>Python</li>
                                                    </ul>
                                                </div>
                                                <div className="services animate-box">
                                                    <h3>Environments</h3>
                                                    <ul>
                                                        <li>Windows</li>
                                                        <li>Linux</li>
                                                        <li>MacOS</li>
                                                    </ul>
                                                </div>
                                                <div className="services animate-box">
                                                    <h3>SDLC/Testing Methodologies</h3>
                                                    <ul>
                                                        <li>Agile</li>
                                                        <li>Jira</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="services animate-box">
                                                    <h3>Front End Development</h3>
                                                    <ul>
                                                        <li>HTML / CSS / CSS3</li>
                                                        <li>Tailwind CSS / SCSS</li>
                                                        <li>JS &amp; Jquery</li>
                                                        <li>WordPress</li>
                                                        <li>Bootstrap</li>
                                                    </ul>
                                                </div>
                                                <div className="services animate-box">
                                                    <h3>Version Control</h3>
                                                    <ul>
                                                        <li>Git</li>
                                                        <li>GitHub</li>
                                                        <li>GitLab</li>
                                                    </ul>
                                                </div>
                                                <div className="services animate-box">
                                                    <h3>Relational Database</h3>
                                                    <ul>
                                                        <li>MySQL</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="services animate-box">
                                                    <h3>Teamwork</h3>
                                                    <ul>
                                                        <li>Committed to maintaining constant communication with the team and
                                                            project manager to ensure the
                                                            project goals are met</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="services animate-box">
                                                    <ul>
                                                        <li>Experience working in HTML Email template design, Responsive Design,
                                                            Website Designing, Website Development,
                                                            Website optimization, Search Engine Optimizations knowledge(SEO)
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="one-forth services-img"
                                        style={{ backgroundImage: "url('assets/images/Picture2.png')" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="colorlib-blog">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Works</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Read Our Case</span>
                                <h2>Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Experience</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row animate-box">
                        <div className="col-md-6">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="article">
                                            <Link to="/works" className="blog-img">
                                                <img className="img-responsive" src={"assets/images/office-image.jpg"}
                                                    alt="html5 bootstrap by colorlib.com" style={{ height: '394px', width: '100%', objectFit: 'cover' }}/>
                                                <div className="overlay"></div>
                                                <div className="link">
                                                    <span className="read">Read more</span>
                                                </div>
                                            </Link>
                                            <div className="desc">
                                                <span className="meta" style={{color:'black',fontWeight:'bold' }}>07/2023 – PRESENT</span>
                                                <h2><Link to="/works">Developer | iSiteTv Studio, United Kingdom</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="item">
                                    <div className="col-md-12">
                                        <div className="article">
                                            <Link to="/works" className="blog-img">
                                                <img className="img-responsive" src={"assets/images/arlington-research-kN_kViDchA0-unsplash-1-scaled-1920x1024.jpg"}
                                                    alt="html5 bootstrap by colorlib.com" style={{ height: '394px', width: '100%', objectFit: 'cover' }} />
                                                <div className="overlay"></div>
                                                <div className="link">
                                                    <span className="read">Read more</span>
                                                </div>
                                            </Link>
                                            <div className="desc">
                                                <span className="meta" style={{color:'black',fontWeight:'bold' }}>01/2019 - 05/2023</span>
                                                <h2><Link to="/works">Front End Developer | Adsum Originator LLP, India</Link>
                                                </h2>
                                                {/* <!-- <p>
                                                <ul>
                                                    <li>Coded websites using HTML, CSS, Bootstrap, JavaScript, and jQuery languages.</li>
                                                    <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript,
                                                        AJAX, and JSON coding WordPress theme customization</li>
                                                    <li>Provided front-end website development using WordPress, Hubspot, and other editing software.</li>
                                                    <li>Oversaw back-end development using PHP to maintain website integrity</li>
                                                    <li>Adhered to SEO best practices while designing sites.</li>
                                                    <li>Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser
                                                        compatibility</li>
                                                    <li>Developing and testing REST API</li>
                                                    <li>Enhanced front-end De performance through image optimization and clean coding practices accelerating
                                                        load times</li>
                                                    <li>Boost website performance and stability through planned maintenance and targeted troubleshooting</li>
                                                    <li>Improved web development plans to achieve current requirements within the assigned timeframe E5												</li>
                                                    <li>Produced design renderings readily understood by technical and non-technical audiences</li>
                                                </ul>
                                            </p> --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="colorlib-work">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Portfolio</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Portfolio</span>
                                <h2>Done Portfolio</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Portfolio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="work-entry animate-box" style={{borderRadius: "10px"}}>
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(1).jpg')", borderRadius: "10px" }} >
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Cakeshop web design concept</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, Jquery UI, React</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(1).png')",borderRadius: "10px" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Zelios Real Estate</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, WordPress, Php</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(2).jpg')",borderRadius: "10px" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Desire Connect Everyday</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, Jquery UI, React</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(3).jpg')",borderRadius: "10px" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Fox.</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, Bootstrap, Jquery, Jquery UI</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(1).webp')",borderRadius: "10px" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Logo Hear</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, WordPress, Php</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/portfolios" className="work-img" style={{ backgroundImage: "url('assets/images/p(2).webp')",borderRadius: "10px" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Connect Futures</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Technology :</h4>
                                            <p>HTML, CSS, JavaScript, Bootstrap, Jquery, Jquery UI</p>
                                            <p className="read"><Link to="/portfolios">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="colorlib-work">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Projects</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Projects</span>
                                <h2>University Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Projects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/MovingObjectDetection1.jpg')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Moving Object Detection Using Deep Learning</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Project Brief:</h4>
                                            <p>Object instance segmentation is to detect objects from an image and generate a
                                                high quality
                                                segmentation mask for each object instance. This can be done by training a deep
                                                learning network with labelled
                                                datasets.</p>
                                            <h4>Tech Stack:</h4>
                                            <p>Machine Learning, Deep Learning, Python</p>
                                            <p className="read"><Link to="/projects">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/FeelingAnalysis.jpeg')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Table of Conte Feeling Analysis</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Project Brief:</h4>
                                            <p>Designed a machine learning model such would utilize Movie-Lens Dataset to gather
                                                favorable
                                                and negative reviews of films likely IMDB. Categorized movie reviews using
                                                different machine learning models,
                                                such as KNN, Naive Bayes, SVM, and Decision tree, similarly faster computation
                                                and more accurate predictions.</p>
                                            <h4>Tech Stack:</h4>
                                            <p>Keras, Machine Learning, Sklearn, AWS</p>
                                            <p className="read"><Link to="#">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/EventManagementSystem.png')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Event Management System</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Project Brief:</h4>
                                            <p>The project provides most of the basic functionality required for an event. It
                                                allows the user to
                                                select from a list of event types. Once the user enters an event type
                                                eg(Marriage, Dance Show etc), the system
                                                then allows the user to select the date and time of event, place and the event
                                                equipment’s.</p>
                                            <h4>Tech Stack:</h4>
                                            <p>HTML, CSS, Bootstrap, JavaScript, jQuery UI, PHP, MySQL</p>
                                            <p className="read"><Link to="#">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/Kidvender.png')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Kids Vendor Trader</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-10 col-md-offset-1">
                                        <div className="desc">
                                            <h4>Project Brief:</h4>
                                            <p>E-commerce Website</p>
                                            <h4>Tech Stack:</h4>
                                            <p>HTML, CSS, Bootstrap, WordPress, JavaScript, jQuery, PHP</p>
                                            <p className="read"><Link to="#">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="colorlib-testimony">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Education</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Achievement & Certification</span>
                                <h2>Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Education</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row animate-box">
                            <div className="col-md-12">
                                <div className="testimony">
                                    <h3>EDUCATION</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 style={{ marginBottom: '5px',fontWeight:'bold' }}>Masters in Artificial Intelligence </h4>
                                            <p>University of Essex, Colchester, UK</p>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <p>Jan-2022 to Jan-2023</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 style={{ marginBottom: '5px',fontWeight:'bold'  }}>Bachelor in Computer Science </h4>
                                            <p>Gujarat Technological University, IND</p>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <p>June-2017 to June -2021</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row animate-box" style={{ marginTop: '50px' }}>                            
                            <div className="col-md-6">
                                <div className="testimony">
                                    <h3>CERTIFICATION</h3>
                                    <ul>
                                        <li>Google Ads Display Certification</li>
                                        <li>Complete Bootstrap Master</li>
                                        <li>Web Using WordPress </li>
                                        <li>Front End Development Libraries (freeCodeCamp)</li>
                                        <li>JavaScript Algorithms and Data Structures (freeCodeCamp) </li>
                                        <li>Responsive Web Design (freeCodeCamp) </li>
                                        <li>CSS (HackerRank)</li>
                                    </ul>
                                </div>
                            </div>
                                <div className="testimony">
                                    <h3>ACHIEVEMENT</h3>
                                    <ul>
                                        <li>Secured second place at Ignite Hackathon by Pacific University, India
                                            held in February 2018. Developed a web
                                            application to help women reach their destinations without hassle,
                                            especially at night.</li>
                                        <li>Awarded with a Top-Performer tag at Adsum in the year 2020.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home

