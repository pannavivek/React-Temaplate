import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function TeamCard (props) {

     return (
        <>
        <div className="col-lg-3 col-md-6">
                                    <div className="item-single mb-30">
                                        <div className="image">
                                            <a href={props.links}><img src={props.imgsrc} alt={props.imgsrc} /></a>
                                        </div>
                                        <div className="content">
                                            <h3><a href={props.links}>{props.ctitle}</a></h3>
                                            <span>{props.ctext}</span>
                                            <div className="social-link">
                                                <a href="/#" target="_blank"><FacebookIcon /></a>
                                                <a href="/#" target="_blank"><TwitterIcon /></a>
                                                <a href="/#" target="_blank"><InstagramIcon /></a>
                                                <a href="/#" target="_blank"><LinkedInIcon /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        </>
    );
}
export default TeamCard;