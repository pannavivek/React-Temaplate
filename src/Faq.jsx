import React from 'react';
import Faqtest from './Faqtest';
import Contact1 from './img/contact1.jpg';
import Faqbanner from './img/page-title-area/faq.jpg';
import Toggle from './Component/Toggle';

const Faq = () => {
    return (
        <>
            <div className="page-title-area ptb-100">
<div className="container">
<div className="page-title-content">
<h1>FAQ</h1>
<ul>
<li className="item"><a href="index.html">Home</a></li>
<li className="item active"><span></span>Faq</li>
</ul>
</div>
</div>
<div className="bg-image">
<img src={Faqbanner} alt="Demo" />
</div>
</div>
<Toggle />
<div id="faq" className="faq-area pt-100 pb-70">
    <div className="container">
        <div className="top-content">
            <div className="title">
                <span className="sub-title">FAQ</span>
                <h2>General Questions</h2>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="panel-group mb-30" id="accordion1">
                        <div className="row">
                            <div className="col-lg-12">
                                <Faqtest />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>


<section id="contact" className="contact-section pb-70">
<div className="container">
<div className="top-content">
<div className="title">
<span className="sub-title">Get a quote</span>
<h2>Get In Touch Now</h2>
</div>
<ul className="info-list">
<li><i className='bx bx-phone'></i>Call us Now</li>
<li><a href="tel:+44-45789-5789">(+44) - 45789 - 5789</a></li>
</ul>
<ul className="info-list">
<li><i className='bx bx-envelope'></i>Mail us Now</li>
<li><a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#166563666679646256707775626f3875797b"><span className="__cf_email__" data-cfemail="0e7d7b7e7e617c7a4e686f6d7a77206d6163">[email&#160;protected]</span></a></li>
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
<input type="text" name="name" className="form-control" id="name" required="" data-error="Enter your name" placeholder="Name" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="form-group">
<input type="email" name="email" className="form-control" id="email" required="" data-error="Enter your email" placeholder="Email" />
<div className="help-block with-errors"></div>
</div>
</div>
<div className="col-lg-6 col-md-6">
<div className="form-group">
<input type="text" name="phone_number" className="form-control" id="phone_number" required="" data-error="Enter your number" placeholder="Phone" />
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
<textarea name="message" id="message" className="form-control" cols="30" rows="8" required="" data-error="Please enter your message" placeholder="Message..."></textarea>
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

export default Faq;