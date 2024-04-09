import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Contact = () => {

    return (
        <>
            <div id="colorlib-page">
                <Header />
                <div id="colorlib-contact">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Contact</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Contact</span>
                                <h2>Contact Me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="rotate">
                                    <h2 className="heading">Contact</h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-md-offset-0">
                                <div class="row">
                                    <div class="col-md-4 animate-box">
                                        <h3>My Information</h3>
                                        <ul className="contact-info" style={{ fontSize: '18px', color: 'black' }}>
                                            <li><span><i className="icon-phone4"></i></span>+44 07880205836</li>
                                            <li><span><i className="icon-envelope2" onClick={() => window.location = 'mailto:nikunjdhanani024@gmail.com'}
                                            ></i></span>
                                                <Link
                                                    to="#"
                                                    style={{ color: 'black' }}
                                                    onClick={() => window.location = 'mailto:nikunjdhanani024@gmail.com'}
                                                >nikunjdhanani024@gmail.com
                                                </Link>
                                            </li>
                                            <li><span><i className="icon-linkedin4" onClick={() => window.open("https://linkedin.com/in/nikunj-dhanani-a607691a8/", "_blank")}
                                            ></i></span>
                                                <Link
                                                    to="#"
                                                    style={{ color: 'black' }}
                                                    onClick={() => window.open("https://linkedin.com/in/nikunj-dhanani-a607691a8/", "_blank")}
                                                > linkedin.com/in/nikunj-dhanani-a607691a8/
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-7 col-md-push-1 animate-box">
                                        <img className="services-img"
                                            src={"assets/images/contatcnik.png"} style={{maxWidth:"100%"}}/>
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

export default Contact