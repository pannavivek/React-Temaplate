import React from 'react';
import Testimonials from './Component/Testimonials';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import Teamcard from './Component/Teamcard';
import Teamsource from './Component/Teamsource';
import Carousel from 'react-elastic-carousel';
import Servicescard from './Component/Servicesslidercard';
import Servicesource from './Component/Servicesource';
import GraphChart from './Component/GraphChart';
//import { Helmet } from "react-helmet";


const breakpoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 5, itemsToScroll: 1 },
    { width: 850, itemsToShow: 5, itemsToScroll: 1 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1750, itemsToShow: 4, itemsToScroll: 1 },
  ];

const Home = () => {
    return (
        <>
            {/* <Helmet>
                <title>Facty - Industry & Factory Company HTML Template</title>
                <meta name="description" content="PannaLive-All the information about Panna City in India, Complete Panna portal. Includes City Guide, Business directory, travel, Hospitals, Schools, City map and Hotels information." />
                <meta name="keywords" content="Panna, Panna District, City of India, Panna Jila, Panna Janpad, Panna City, PannaLive, District of (MP), City of India, City details, Tourism"/>
            </Helmet> */}
            
            <div id="home" className="home-banner-area light-mode">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ml-auto">
                            <div className="banner-content">
                                <h1>
                                    One Industry All Factorial Solution
                                </h1>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                                <div className="btn-group">
                                    <a href="help.html" className="primary-btn">Discover</a>
                                    <a href="https://www.youtube.com/watch?v=i9E_Blai8vk" className="youtube-popup video-btn">
                                        <PlayArrowOutlinedIcon />
                                    </a>
                                    <a href="about.html" className="btn-text">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GraphChart />
            <section className="promo-service-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <i className='flaticon flaticon-oil-pumps'></i>
                                <h3><a href="services-details.html">Petroleum Refinery</a></h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomized words.</p>
                                <div className="cta-btn">
                                    <a href="services-details.html" className="btn-text">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <i className='flaticon flaticon-flask'></i>
                                <h3><a href="services-details.html">Chemical Engineering</a></h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomized words.</p>
                                <div className="cta-btn">
                                    <a href="services-details.html" className="btn-text">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <i className='flaticon flaticon-electricity-tower'></i>
                                <h3><a href="services-details.html">Power and Energy</a></h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour or randomized words.</p>
                                <div className="cta-btn">
                                    <a href="services-details.html" className="btn-text">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="about" className="about-section pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image mb-30">
                                <img src={require('./img/career2.jpg').default} alt="demo" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content mb-30">
                                <span className="sub-title">About Us</span>
                                <h2>
                                    We Are Providing Services Since <span>1995</span>
                                </h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
                                </p>
                                <div className="content-list">
                                    <i className='bx bx-caret-right'></i>
                                    <h6>Quality Control System, 100% Guarantee</h6>
                                </div>
                                <div className="content-list">
                                    <i className='bx bx-caret-right'></i>
                                    <h6>Innovative Engineers</h6>
                                </div>
                                <div className="content-list">
                                    <i className='bx bx-caret-right'></i>
                                    <h6>Environmental Sensitivity</h6>
                                </div>
                                <div className="content-list">
                                    <i className='bx bx-caret-right'></i>
                                    <h6>Highly Modified Equipment</h6>
                                </div>
                                <div className="content-list">
                                    <i className='bx bx-caret-right'></i>
                                    <h6>Professional and Qualified</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <blockquote className="blockquote">
                        <div className="image">
                            <img src={require('./img/about/about-quote.jpg').default} alt="Demo" />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.</p>
                        <span>- Alexander Gonzales, CEO</span>
                    </blockquote>
                </div>
            </section>


            <section id="services" className="services-section pb-100">
                <div className="container">
                    <div className="top-content">
                        <div className="title">
                            <span className="sub-title">Services</span>
                            <h2>Technical Solutions</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                        <a href="services.html" className="primary-btn">All Services</a>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="services-slider">
                    
                        <Carousel
                            itemPadding={[0, 10]} 
                             outerSpacing={150}
                            itemsToShow={3}
                            breakpoints={breakpoints}
                            showArrows={true}
                            enableMouseSwipe={true}
                            enableAutoPlay autoPlaySpeed={3500}
                            pagination={false}
                            initialActiveIndex={2}
                        >
                            { Servicesource.map((val) => {    
                                return (
                                    <Servicescard 
                                    key = {val.id}
                                    imgsrc= {val.imgsrc}
                                    ctitle= {val.ctitle}
                                    ctext= {val.ctext}
                                    links= {val.links}
                                    />
                                );
                                }
                            )
                            }     
                        </Carousel>
                        
                       
                    </div>
                </div>
            </section>


            <section id="projects" className="projects-section pb-100">
                <div className="container">
                    <div className="top-content">
                        <div className="title">
                            <span className="sub-title">projects</span>
                            <h2>Recent Works</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                        <a href="projects.html" className="primary-btn">All projects</a>
                    </div>
                    <div className="projects-wrapper">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-20">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project1.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Power And Energy</a></h3>
                                        <span>Oil and Gas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-30">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project2.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Welding Processing</a></h3>
                                        <span>Mechanical</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-30">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project3.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Bridge Construction</a></h3>
                                        <span>Construction</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-30">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project4.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Oil & Gas Filtering</a></h3>
                                        <span>Petroleum</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-30">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project5.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Welding Processing</a></h3>
                                        <span>Mechanical</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="item-single mb-30">
                                    <div className="image">
                                        <a href="projects-details.html"><img src={require('./img/projects/project6.jpg').default} alt="Demo" /></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="projects-details.html">Automation Industry</a></h3>
                                        <span>Technical</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="testimonials" className="testimonials-section pb-100">
                <div className="container">
                    <div className="top-content">
                        <div className="title">
                            <span className="sub-title">testimonials</span>
                            <h2>What're Our Clients Say</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                    </div>
                    <div className="testimonial-slider">
                        <Testimonials />
                    </div>
                </div>
            </section>


            <section id="team" className="team-section pb-70">
                <div className="container">
                    <div className="top-content">
                        <div className="title">
                            <span className="sub-title">Team</span>
                            <h2>Our Most Experience Team</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                    </div>
                    <div className="row justify-content-center">

                        { Teamsource.map((tval, index) => {
                    
                            if (index >= 1 && index < 5) {

                                return (

                                    <Teamcard

                                        key={tval.id}
                                        imgsrc={tval.imgsrc}
                                        ctitle={tval.ctitle}
                                        ctext={tval.ctext}
                                        links={tval.links}
                                    />
                                );
                            }
                        }
                        ) 
                        }
                    </div>
                </div>
            </section>


            <section id="blog" className="blog-section pb-70">
                <div className="container">
                    <div className="top-content">
                        <div className="title">
                            <span className="sub-title">Blog</span>
                            <h2>Top Most Blog Post</h2>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <div className="image">
                                    <a href="blog-details.html"><img src={require('./img//blog/blog1.jpg').default} alt="Demo " /></a>
                                    <div className="tag">Mechanical</div>
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="blog-details.html">Industrial Evolution</a>
                                    </h3>
                                    <ul className="info-list">
                                        <li><i className='bx bx-user'></i>By Dylan Graham</li>
                                        <li><i className='bx bx-calendar-alt'></i>03 Oct, 2020</li>
                                    </ul>
                                    <hr />
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    <div className="cta-btn">
                                        <a href="blog-details.html" className="btn-text">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <div className="image">
                                    <a href="blog-details.html"><img src={require('./img//blog/blog2.jpg').default} alt="Demo" /></a>
                                    <div className="tag">Oil & gas</div>
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="blog-details.html">Smart Factory Solutions</a>
                                    </h3>
                                    <ul className="info-list">
                                        <li><i className='bx bx-user'></i>By J. Robinson</li>
                                        <li><i className='bx bx-calendar-alt'></i>09 Nov, 2020</li>
                                    </ul>
                                    <hr />
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    <div className="cta-btn">
                                        <a href="blog-details.html" className="btn-text">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="item-single mb-30">
                                <div className="image">
                                    <a href="blog-details.html"><img src={require('./img//blog/blog3.jpg').default} alt="Demo" /></a>
                                    <div className="tag">Industrial</div>
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="blog-details.html">Future of Manufacturing</a>
                                    </h3>
                                    <ul className="info-list">
                                        <li><i className='bx bx-user'></i>By Mark McLaren</li>
                                        <li><i className='bx bx-calendar-alt'></i>13 Oct, 2020</li>
                                    </ul>
                                    <hr />
                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    <div className="cta-btn">
                                        <a href="blog-details.html" className="btn-text">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="quote" className="quote-section quote-style-two pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mb-30">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" required="" data-error="Enter your name" placeholder="Your Name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="email" required="" data-error="Enter your email" placeholder="Email Address" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="phone_number" className="form-control" id="phone_number" required="" data-error="Enter your number" placeholder="Phone Number" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="msg_subject" className="form-control" id="msg_subject" required="" data-error="Enter your subject" placeholder="Subject" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control" cols="30" rows="8" required="" data-error="Please enter your message" placeholder="Your Message..."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <button type="submit" className="primary-btn">submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="content mb-30">
                                <span className="sub-title">Get A Quote</span>
                                <h2>Get In Touch Now</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less distribution.
                                </p>
                                <ul className="info-list">
                                    <li><i className='fa fa-map-marker'></i><a href="/#">6890 Blvd, The Bronx, USA</a></li>
                                    <li><i className='fa fa-phone-alt'></i><a href="tel:+91-8587034120">+91-8587034120</a></li>
                                    <li><i className='fa fa-envelope'></i><a href=""><span className="__cf_email__" data-cfemail="c0b3b5b0b0afb2b480a6a1a3b4b9eea3afad">Webscos3@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;