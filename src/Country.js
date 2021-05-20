import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Aboutbanner from './img/page-title-area/about.jpg';

const Country = () => {
  
    const [countrys, setCountrys] = useState([]);

    
    useEffect (() => {
        async function getData(){
            const respons= await axios.get("http://localhost:3004/Country");
            setCountrys(respons.data);
        }
    
        getData();
    })

    return (
        <>
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
                      <div className="row">

                      { countrys.map ((namess, index) => {     // fat arrow function use
                                            return (
                                              
                                              <div className="col-lg-2">
                                    <div className="card" key={index}>
                                      <img className="card-img-top" src={namess.flag} alt={namess.name} />
                                      <div className="card-body">
                                        <p className="card-title">{namess.name}</p>
                                        <p className="card-text">{namess.dialCode}</p>
                                        <p className="card-text">{namess.isoCode}</p>
                                      </div>
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

export default Country;
