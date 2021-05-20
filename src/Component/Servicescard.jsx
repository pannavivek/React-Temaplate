import React from 'react';
import { Link } from 'react-router-dom';
function Servicescard (props) {
     return (
        <>
            <div className="col-lg-4 col-md-6" >
                <div className="item-single mb-30">
                    <div className="image">
                            <a href={props.links}><img src= {props.imgsrc} alt={props.imgsrc} /></a>
                    </div>
                    <div className="content">
                        <h3><a href={props.links}> {props.ctitle} </a></h3>
                        <p>{props.ctext}</p>
                        <div className="cta-btn">
                            <Link to={"/services-details/" + props.links  } >{props.ctitle}</Link>
                        </div>
                    </div>
                    <div className="spacer"></div>
                </div>
            </div>     
        </>
    );
}
export default Servicescard;