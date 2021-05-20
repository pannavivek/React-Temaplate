import React from 'react';
import Contact1 from './img/contact1.jpg';
import Contactbanner from './img/page-title-area/contact.jpg';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    
    return (
        <>
        
            <div className="page-title-area ptb-100">
                    <div className="container">
                    <div className="page-title-content">
                    <h1>Contact Us</h1>
                    <ul>
                    <li className="item"><NavLink to="/">Home</NavLink></li>
                    <li className="item active"><span></span>Contact</li>
                    </ul>
                    </div>
                    </div>
                    <div className="bg-image">
                    <img src={Contactbanner} alt="Demo" />
                    </div>
                    </div>


                    <section id="contact" className="contact-section contact-single pt-100 pb-70">
                    <div className="container">
                    <div className="top-content">
                    <div className="title">
                    <span className="sub-title"> Get a quote</span>
                    <h2>Get In Touch Now</h2>
                    </div>
                    <ul className="info-list">
                    <li><RoomOutlinedIcon /> &nbsp; Call us Now</li>
                    <li><a href="tel:+91-8587034120"> +91-8587034120</a></li>
                    </ul>
                    <ul className="info-list">
                    <li><MailOutlineSharpIcon />&nbsp; Mail us Now</li>
                    <li><a href="mailto:Webscos3@gmail.com"><span className="__cf_email__" data-cfemail="0a797f7a7a65787e4a6c6b697e7324696567">Webscos3@gmail.com</span></a></li>
                    </ul>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="contact-image mb-30">
                    <img src={Contact1} alt={Contact1} />
                    </div>
                    </div>
                    <div className="col-lg-6 mb-30">
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
                    </div>
                    </div>
                    </section>
        </>
    )
}

export default Contact;