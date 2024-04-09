import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Services = () => {

    return (
        <>
            <div id="colorlib-page">
                <Header />
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
                                                        <li>PHP</li>
                                                        <li>ReactJs</li>
                                                        <li>SvelteJs</li>
                                                        <li>AstroJs</li>
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

                <div id="colorlib-progress">
                    <div className="container">
                        <div className="row text-center">
                            <h2 className="bold">Skills</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                                <span>Skills</span>
                                <h2>My Skills</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">HTML / CSS /CSS3 </h2>
                                <div className="progress blue">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">100%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">Tailwind CSS / SCSS</h2>
                                <div className="progress blue">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">100%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">WordPress / Bootstrap</h2>
                                <div className="progress blue">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">100%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">JavaScript</h2>
                                <div className="progress info">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">90%</div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '80px' }}>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">JQuery</h2>
                                <div className="progress info">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">90%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">PHP</h2>
                                <div className="progress yellow">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">85%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">Front-End Development</h2>
                                <div className="progress info">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">90%</div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">React Js</h2>
                                <div className="progress pink">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">80%</div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '80px' }}>
                        <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">Svelte Js</h2>
                                <div className="progress pink">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">85%</div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">Astro Js</h2>
                                <div className="progress pink">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">85%</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 text-center">
                                <h2 className="progress-head">Python</h2>
                                <div className="progress pink">
                                    <span className="progress-left">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar"></span>
                                    </span>
                                    <div className="progress-value">80%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services