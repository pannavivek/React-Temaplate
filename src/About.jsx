import React from 'react';
import Aboutimg1 from './img/about/about-single-1.jpg';
import Aboutimg2 from './img/about/about-single-2.jpg';
import Aboutbanner from './img/page-title-area/about.jpg';
import Aboutimg3 from './img/about/promo1.jpg';
import Aboutimg4 from './img/about/promo2.jpg';
import Aboutimg5 from './img/about/promo3.jpg';
import Aboutimg6 from './img/about/about-quote.jpg';
//import {Helmet} from "react-helmet";
import SearchFilter from './SearchFilter';

const About = () => {
    return (
        <>
        {/* <Helmet>    
            <title>Facty - Industry & Factory Company HTML Template</title>
            <meta name="description" content="PannaLive-All the information about Panna City in India, Complete Panna portal. Includes City Guide, Business directory, travel, Hospitals, Schools, City map and Hotels information." />
            <meta name="keywords" content="Panna, Panna District, City of India, Panna Jila, Panna Janpad, Panna City, PannaLive, District of (MP), City of India, City details, Tourism"/>
      </Helmet> */}
            <div className="page-title-area ptb-100">
                <div className="container">
                    <div className="page-title-content">
                        <h1>About Us</h1>
                        <ul>
                            <li className="item"><a href="index.html">Home</a></li>
                            <li className="item active"><span></span>About</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-image">
                    <img src={Aboutbanner} alt={Aboutbanner} />
                </div>
            </div>


            <div className="about-single-area ptb-100">

                <section id="about" className="about-section about-section-single">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="image-content mb-30">
                                    <img src={Aboutimg1} alt="My Awesome" className="img1" />
                                    <img src={Aboutimg2} alt="Demo" className="img2" />
                                    <div className="count">
                                        <h2>25</h2>
                                        <span>Years of Success</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content mb-30">
                                    <span className="sub-title">About Us</span>
                                    <h2>
                                        We Are Providing Factorial Solution Over The World
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
                    </div>
                </section>


                <div className="promo-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="promo-inner">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="content">
                                                <h2>
                                                    Petroleum Refinery
                </h2>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="image">
                                                <img src={Aboutimg3} alt="Demo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="promo-inner">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="image">
                                                <img src={Aboutimg4} alt="Demo" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="content">
                                                <h2>
                                                    Chemical Engineering
                </h2>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="promo-inner">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="content">
                                                <h2>
                                                    Power and Energy
                </h2>
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
                </p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="image">
                                                <img src={Aboutimg5} alt="Demo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <blockquote className="blockquote">
                        <div className="image">
                            <img src={Aboutimg6} alt="Demo" />
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage.</p>
                        <span>-Alexander Gonzales, CEO</span>
                    </blockquote>
                </div>
            </div>
            <SearchFilter />
        </>
    )
}

export default About;