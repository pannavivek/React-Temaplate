import React from 'react';
import logo from './../logo3.png';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import ScrollIndicator from './ScrollIndicator';
import ScrolltoTop from './ScrolltoTop';
import Servicesource from './Servicesource';


const Footer = () => {
    return (
        <>

            <footer className="footer-area">
               <div className="footer-top pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <div className="navbar-brand">
                                        <NavLink to="/">
                                            <img src={logo} alt="Logo" />
                                        </NavLink>
                                    </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                    <div className="social-link">
                                        <a href="/#" target="_blank"><FacebookIcon /></a>
                                        <a href="/#" target="_blank"><TwitterIcon /></a>
                                        <a href="/#" target="_blank"><InstagramIcon /></a>
                                        <a href="/#" target="_blank"><LinkedInIcon /></a>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                  <div className="footer-widget">
                                     <h3>About Us</h3>
                                        <ul className="footer-links">
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                             <NavLink to="/career">Career</NavLink>
                                        </li>
                                        <li>
                                             <i className='fa fa-chevron-right'></i>
                                             <NavLink to="/help">Help</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/emergency">Emergency</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/area-coverage">Area Coverage</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                             <NavLink to="/pricing">Pricing Plans</NavLink>
                                        </li>
                                        </ul>
                                    </div>
                             </div>
                             <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="footer-widget">
                                    <h3>Services</h3>
                                    <ul className="footer-links">
                                    { Servicesource.map((val, index) => {
                                        if (index >= 0 && index < 5) {
                                            return (
                                                <li key={val.id}>
                                                    <i className='fa fa-chevron-right'></i>
                                                    <NavLink to={"/services-details/" + val.id  } >{val.ctitle}</NavLink>
                                                </li>
                                            );
                                        }
                                     } )
                                    } 
                                    </ul>
                                </div>
                            </div>
                             <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="footer-widget">
                                        <h3>Quick Links</h3>
                                        <ul className="footer-links">
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/faq">FAQ</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                             <NavLink to="/appointment">Appointment</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/terms-of-service">Terms & Conditions</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                                        </li>
                                        <li>
                                            <i className='fa fa-chevron-right'></i>
                                            <NavLink to="/contact">Contact Us</NavLink>
                                        </li>
                                        </ul>
                                  </div>
                            </div>
                        </div>
                             <div className="bg-image"></div>
                    </div>
                </div>
                    <div className="copy-right-area">
                            <div className="container">
                                    <div className="copy-right-content">
                                         <ul className="info-list">
                                            <li className="content">
                                                <RoomOutlinedIcon />6890 Blvd, The Bronx, NY 1058, USA
                                            </li>
                                            <li className="content">
                                                <MailOutlineSharpIcon/>
                                                 <NavLink to="Webscos3@gmail.com"><span className="__cf_email__" data-cfemail="ed8588818182ad8b8c8e9994c38e8280"> &nbsp; Webscos3@gmail.com</span></NavLink>
                                            </li>
                                        </ul>
                                        <span>
                                        Copyright @2021 Facty. Designed By &nbsp;
                                        <NavLink to="https://webscos.com/" target="_blank">
                                            Webscos.com
                                        </NavLink>
                                        </span>
                                  </div>
                            </div>
                    </div>
            </footer>
            <ScrollIndicator />
            <ScrolltoTop />

         </>
     )
}

export default Footer;