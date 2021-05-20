import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Servicesbanner from './img/page-title-area/services.jpg';
import Servicesource from './Component/Servicesource';
import Details1 from './img/service/service-details-1.jpg';
import Details2 from './img/service/service-details-2.jpg';
import Details3 from './img/service/service-details-3.jpg';
import Details4 from './img/service/service-details-4.jpg';

const ServicesDetails = () => {
  const [user, setUser] = useState({
    imgsrc: "",
    ctitle: "",
    ctext: "",
    links: ""
  });
  const { id } = useParams();

  useEffect (() => {
    async function getData(){
        const respons= await axios.get(`http://localhost:3004/servicesource/${id}`, user);
        setUser(respons.data);
    }

    getData();
})
  return (
    <>

        <div className="page-title-area ptb-100">
                <div className="container">
                    <div className="page-title-content">
                        <h1>{user.ctitle}</h1>
                        <ul>
                            <li className="item"><a href="index.html">Home</a></li>
                            <li className="item active"><span></span>{user.ctitle}</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-image">
                    <img src={Servicesbanner} alt={Servicesbanner} />        
                </div>
                </div>


                <div className="service-details-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <aside className="widget-area">
                                    <div className="widget">
                                        <h3 className="title">Service Category</h3>
                                        <p>Select A Service Category</p>
                                        <ul className="nav-list">
                                        { Servicesource.map((user) => {     // fat arrow function use
                                            return (
                                              
                                            <li className="active" key = {user.id}>
                                               <Link to={"/services-details/" + user.id } >{user.ctitle}</Link>
                                            </li>
                                            );
                                        }
                                    )
                                    } 
                                        </ul>
                                    </div>
                                    <div className="widget contact-form">
                                        <h3 className="title">Learn Something More?</h3>
                                        <form id='contactForm' >
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control" id="name" required="" data-error="Please enter your name" placeholder="Name" />
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input type="email" name="email" className="form-control" id="email" required="" data-error="Please enter your email" placeholder="Email" />
                                                                <div className="help-block with-errors"></div>
                                                        </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <textarea id="message" className="form-control" required="" data-error="Please enter your message" placeholder="Message" rows="6"></textarea>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 text-center">
                                                            <button type="submit" className="primary-btn">Send Now</button>
                                                            <div id="msgSubmit" className="h5 text-center hidden"></div>
                                                        </div>
                                                    </div>
                                            </form>
                                            </div>
                                            <div className="widget brochure">
                                                <h3 className="title">Brochures</h3>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                                <div className="content-list">
                                                    <a href="/#" className="btn-block">
                                                        <i className='fa fa-file-pdf'></i>
                                                         Download .PDF
                                                    </a>
                                                </div>
                                                <div className="content-list">
                                                    <a href="/#" className="btn-block">
                                                        <i className='fa fa-file-word'></i>
                                                            Download .DOC
                                                    </a>
                                                </div>
                                                <div className="content-list">
                                                    <a href="/#" className="btn-block">
                                                        <i className='fa fa-file-alt'></i>
                                                         Download .TXT
                                                    </a>
                                                </div>
                                            </div>
                                            </aside>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="service-details-desc">
                                            <div className="service-details-slider owl-carousel">
                                                <div className="image">
                                                    <img src={user.imgsrc} alt="Demo" />
                                                    </div>
                                                   
                                                </div>
                                                        <div className="content">
                                                            <h2>{user.ctitle}</h2>
                                                            
                                                            <p>
                                                                {user.ctext}
                                                            </p>
                                                        </div>
                                                        <div className="content">
                                                            <h2>Why You Choose Us?</h2>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="item-single mb-30">
                                                                    <div className="image">
                                                                        <img src={Details1} alt="Demo" />
                                                                    </div>
                                                                        <div className="item-content">
                                                                            <h3><a href="services-details.html">Best Working Experience</a></h3>
                                                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6">
                                                                    <div className="item-single mb-30">
                                                                        <div className="image">
                                                                            <img src={Details2} alt="Demo" />
                                                                        </div>
                                                                            <div className="item-content">
                                                                                <h3><a href="services-details.html">Well Trained Worker</a></h3>
                                                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6">
                                                                        <div className="item-single mb-30">
                                                                            <div className="image">
                                                                                <img src={Details3} alt="Demo" />
                                                                              </div>
                                                                                <div className="item-content">
                                                                                    <h3><a href="services-details.html">Highly Professional Engineer</a></h3>
                                                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6">
                                                                            <div className="item-single mb-30">
                                                                                <div className="image">
                                                                                    <img src={Details4} alt="Demo" />
                                                                                </div>
                                                                                    <div className="item-content">
                                                                                        <h3><a href="services-details.html">Most Developed Equipments</a></h3>
                                                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

   </> 
  );
};

export default ServicesDetails;