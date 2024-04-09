import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { CSSTransition, CSSTransitionGroup, TransitionGroup } from 'react-transition-group';
import $ from 'jquery';
import 'bootstrap';
import Header from '../commonPages/Header';

const Works = () => {

    return (
        <>
            <div id="colorlib-page">
                <Header />
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
                        <div className="item">
                                <div className="col-md-12">
                                    <div className="article">
                                        <Link to="/works" className="blog-img" >
                                            <img className="img-responsive" src={"assets/images/office-image.jpg"}
                                                alt="html5 bootstrap by colorlib.com" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
                                            <div className="overlay"></div>
                                            <div className="link">
                                                <span className="read">Read more</span>
                                            </div>
                                        </Link>
                                        <div className="desc">
                                            <span className="meta">07/2023 – Present</span>
                                            <h2><Link to="/works">Developer | iSiteTv Studio, Colchester, United Kingdom</Link></h2>
                                            <p style={{ fontSize: '18px' }}>
                                                <ul>
                                                    <li>Developed and maintained frontend components using Svelte.js, Astro.js, and Next.js, ensuring high performance and responsiveness across various devices.
                                                    </li>
                                                    <li>Innovated and built a sustainable CSS codebase, resulting in an overall reduction of 40% of original code volume.
                                                    </li>
                                                    <li>Headed an initiative to migrate to Svelte, which reduced codebase by 25% and increased webpage loading speed by 35%.
                                                    </li>
                                                    <li>Achieved a 93% ideal website performance by carrying out regular upgrades, security patches, and other website maintenance chores.
                                                    </li>
                                                    <li>Migrated a multi-page user experience into a single page app, improving customer engagement by 40%.
                                                    </li>
                                                    <li>Participated in each step of the product development process from ideation to development improvement for features reaching over 150,000 users.
                                                    </li>
                                                    <li>Implemented code standards that improved team's average productivity by 25%.
                                                    </li>
                                                    <li>Successfully migrated legacy systems to Azure Cosmos DB, resulting in improved performance by 30% and cost savings.
                                                    </li>
                                                    <li>Implemented backup and disaster recovery strategies for critical data stored in Azure Table Storage.
                                                    </li>
                                                    <li>Streamlined video content management processes by leveraging AI Video Indexer, resulting in 30% time savings and improved 50% accuracy.
                                                    </li>
                                                    <li>Implemented headless CMS solutions such as Contentful and Strapi, enabling content editors to manage and publish content effectively.
                                                    </li>
                                                    <li>Utilized CI/CD pipelines to automate the build, test, and deployment processes, resulting in increased productivity and faster time-to-market.
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="col-md-12">
                                    <div className="article">
                                        <Link to="/works" className="blog-img">
                                            <img className="img-responsive" src={"assets/images/arlington-research-kN_kViDchA0-unsplash-1-scaled-1920x1024.jpg"}
                                                alt="html5 bootstrap by colorlib.com" style={{ height: '340px', width: '100%', objectFit: 'cover' }} />
                                            <div className="overlay"></div>
                                            <div className="link">
                                                <span className="read">Read more</span>
                                            </div>
                                        </Link>
                                        <div className="desc">
                                            <span className="meta">01/2019 - 05/2023</span>
                                            <h2><Link to="/works">Front End Developer | Adsum Originator LLP, Surat, India</Link>
                                            </h2>
                                            <p style={{ fontSize: '18px' }}>
                                                <ul>
                                                    <li>Utilized HTML, CSS/SCSS, Bootstrap/Tailwind, JavaScript, jQuery, and PHP to create 50+ responsive landing pages.</li>
                                                    <li>Developed interactive user-facing interfaces using TypeScript and React.js library.</li>
                                                    <li>Converted mockups into usable web presence with AJAX, and JSON.</li>
                                                    <li>Rewrote HTML to meet industry and company standards for SEO and Accessibility. This drove a 600% 
                                                    increase in users by appearing on the first page of Google search results.</li>
                                                    <li>Tested, debugged, and shipped 10s of 1000s of lines of code to various development teams. This lead to 
                                                    100% bug-free deployment.</li>
                                                    <li>Proactively fixed bugs and supported by resolving complex technical issues which increased productivity by 
                                                    about 35%.</li>
                                                    <li>Introduced Jira style ticketing system to promote highly efficient asynchronous and synchronous work, 
                                                    increasing efficiency by 12%.</li>
                                                    <li>Maintained graphic standards and branding throughout the product’s interfaces.
                                                    Developed and Tested REST API.</li>
                                                </ul>
                                            </p>
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

export default Works