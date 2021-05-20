import React from 'react';
import Servicesbanner from './img/page-title-area/services.jpg';
import { Link } from 'react-router-dom';
import Servicesource from './Component/Servicesource';
//import {Helmet} from "react-helmet";

const Services = () => {
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
                        <h1>Services</h1>
                        <ul>
                            <li className="item"><a href="index.html">Home</a></li>
                            <li className="item active"><span></span>Services</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-image">
                     <img src={Servicesbanner} alt={Servicesbanner} />
                </div>
            </div>


            <div className="service-single-area ptb-100">

                    <section id="services" className="service-section-three">
                        <div className="container">
                             <div className="top-content">
                                 <div className="title">
                                     <span className="sub-title">Services</span>
                                    <h2>Technical Solutions</h2>
                                 </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum similique.</p>
                            </div>
                                <div className="row justify-content-center">
                                        { Servicesource.map((val) => { 
                                            return (
                                                
                                                <div className="col-lg-4 col-md-6" key = {val.id}>
                                                    <div className="item-single mb-30">
                                                        <div className="image">
                                                                <a href={val.links}><img src= {val.imgsrc} alt={val.imgsrc} /></a>
                                                        </div>
                                                        <div className="content">
                                                            <h3><a href={val.links}> {val.ctitle} </a></h3>
                                                            <p>{val.ctext}</p>
                                                            <div className="cta-btn">
                                                                <Link to={"/services-details/" + val.id  } >{val.ctitle}</Link>
                                                            </div>
                                                        </div>
                                                        <div className="spacer"></div>
                                                    </div>
                                                </div>
                                                
                                            );
                                        }
                                    )
                                    }      
                                </div>
                        </div>
                    </section>

                </div>

        </>
    )
}

export default Services;