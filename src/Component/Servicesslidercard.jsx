import React from 'react';

function Servicesslidercard(props) {
    return (
        <>
            <div className="item-single">
                <div className="image">
                  <a href={props.links}><img src={props.imgsrc} alt={props.imgsrc} /></a>
                </div>
                    <div className="content">
                         <h3><a href={props.links}> {props.ctitle} </a></h3>
                            <p>{props.ctext}</p>
                        <div className="cta-btn">
                            <a href={props.links}  className="btn-text">Read More</a>
                        </div>
                    </div>
                </div> 
        </>
    );
}
export default Servicesslidercard;