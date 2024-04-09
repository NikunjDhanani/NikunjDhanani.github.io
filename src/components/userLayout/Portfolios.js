import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Portfolios = () => {

	return (
		<>
			<div id="colorlib-page">
				<Header />
				<div id="colorlib-work">
					<div class="container">
						<div class="row text-center">
							<h2 class="bold">Portfolio</h2>
						</div>
						<div class="row">
							<div class="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
								<span>Portfolio</span>
								<h2>Portfolio</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="rotate">
									<h2 class="heading">Portfolio</h2>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(1).jpg')", height: '310rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Cakeshop web design concept</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, Jquery UI, React</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(1).png')", height: '86rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Zelios Real Estate</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, WordPress, Php</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(2).jpg')", height: '109rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Desire Connect Everyday</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, Jquery UI, React</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(3).jpg')", height: '86rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Fox.</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, Bootstrap, Jquery, Jquery UI</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(1).webp')", height: '86rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Logo Hear</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, WordPress, Php</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="work-entry animate-box">
									<Link to="/portfolios" class="work-img" style={{ backgroundImage: "url('assets/images/p(2).webp')", height: '86rem' }}>
									</Link>
									<div class="col-md-8 col-md-offset-2">
										<div class="desc text-center">
											<h2>Connect Futures</h2>
											<h4>- Technology -</h4>
											<p>HTML, CSS, JavaScript, Bootstrap, Jquery, Jquery UI</p>
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

export default Portfolios