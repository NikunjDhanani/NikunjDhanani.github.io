import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Projects = () => {

    return (
        <>
            <div id="colorlib-page">
                <Header />
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
                            <div className="col-md-12">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/MovingObjectDetection1.jpg')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Moving Object Detection Using Deep Learning</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-4 col-md-offset-4">
                                        <div className="desc">
                                            <h4>Project Brief:</h4>
                                            <p>Object instance segmentation is to detect objects from an image and generate a
                                                high quality
                                                segmentation mask for each object instance. This can be done by training a deep
                                                learning network with labelled
                                                datasets.</p>
                                            <h4>Tech Stack:</h4>
                                            <p>Machine Learning, Deep Learning, Python</p>
                                            <p className="read"><Link to="#">View details</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/FeelingAnalysis.jpeg')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Table of Conte Feeling Analysis</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-4 col-md-offset-4">
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
                            <div className="col-md-12">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/EventManagementSystem.png')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Event Management System</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-4 col-md-offset-4">
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
                            <div className="col-md-12">
                                <div className="work-entry animate-box">
                                    <Link to="/projects" className="work-img" style={{ backgroundImage: "url('assets/images/Kidvender.png')" }}>
                                        <div className="display-t">
                                            <div className="work-name">
                                                <h2>Kids Vendor Trader</h2>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="col-md-4 col-md-offset-4">
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
            </div>
        </>
    )
}

export default Projects