import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';

const getEffects = async () => {
    
    // Animations
    // var contentWayPoint = function () {
    var i = 0;
    window.$('.animate-box').waypoint(function (direction) {

        if (direction === 'down' && !$(this.element).hasClass('animated')) {

            i++;

            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .animate-box.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn animated');
                        } else {
                            el.addClass('fadeInUp animated');
                        }

                        el.removeClass('item-animate');
                    }, k * 200, 'easeInOutExpo');
                });

            }, 100);

        }

    }, { offset: '85%' });

    var counter = function () {
    window.$('.js-counter').countTo({
        formatter: function (value, options) {
            return value.toFixed(options.decimals);
        },
    });
    };

    // var counterWayPoint = function () {
    if (window.$('#colorlib-counter').length > 0) {
        window.$('#colorlib-counter').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                setTimeout(counter, 400);
                $(this.element).addClass('animated');
            }
        }, { offset: '90%' });
    }

    // Owl Carousel
    // var owlCarouselFeatureSlide = function () {
    var owl = window?.$('.owl-carousel1');
    owl.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        navText: [
            "<i className='icon-arrow-left3 owl-direction'></i>",
            "<i className='icon-arrow-right3 owl-direction'></i>"
        ]
    });
    var owl2 = window?.$('.owl-carousel');
    owl2.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: true,
        items: 1,
        navText: [
            "<i className='icon-arrow-left3 owl-direction'></i>",
            "<i className='icon-arrow-right3 owl-direction'></i>"
        ]
    });
    var owl3 = window?.$('.owl-carousel3');
    owl3.owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        autoplay: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoHeight: true,
        items: 1,
        navText: [
            "<i className='icon-arrow-left3 owl-direction'></i>",
            "<i className='icon-arrow-right3 owl-direction'></i>"
        ]
    });
};


const Header = () => {


    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        console.log(document.body.classList);
        console.log(document.querySelector('#colorlib-main-nav > .js-colorlib-nav-toggle').classList);
        document.body.classList.toggle("menu-show");
        document.querySelector('#colorlib-main-nav > .js-colorlib-nav-toggle').classList.toggle("show");
    };

    useEffect(()=>{
        getEffects();
        console.log('hi');
    });

    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="colorlib-navbar-brand">
                                <Link className="colorlib-logo" to="/"><span>Web</span><span>Developer</span></Link>
                            </div>
                            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" onClick={handleToggle}><i></i></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;