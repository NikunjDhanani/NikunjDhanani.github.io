import React, { useEffect,useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const About = () => {

    return (
        <>
            <div id="colorlib-page">
                <Header/>
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
                                            animateOut={'fadeOut'}
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
                                        <p>
                                            Highly Skilled and result driven Developer with 5+ years of experience managing multiple clients. Passionate and hardworking to deliver on deadlines. Strong HTML, CSS, Bootstrap, JavaScript, TypeScript and PHP programmer. Contributes specialty in search engine optimization, marketing, social media management, and audio/video integration to launch custom-tailored code for website presence. Detailed understanding of complex, up-to-date programming languages and considerations. An innovative approach to actualizing organizational marketing plans. Resourceful navigation of intricatefactors governing web planning, security, SEO, and Web hosting.
                                        </p>
                                        {/* <p className="colorlib-social-icons">
                                            <a href="#"><i className="icon-facebook4"></i></a>
                                            <a href="#"><i className="icon-twitter3"></i></a>
                                            <a href="#"><i className="icon-googleplus"></i></a>
                                            <a href="#"><i className="icon-dribbble2"></i></a>
                                        </p>
                                        <p><a href="/contact" className="btn btn-primary btn-outline">Contact Me!</a></p> */}
                                        <p>
                                            <Link className="btn btn-primary btn-outline" to="/contact">Contact Me!</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About