import React from 'react';
import Teambanner from './img/page-title-area/team.jpg';
import Teamcard from './Component/Teamcard';
import Teamsource from './Component/Teamsource';

const Team = () => {
    return (
        <>
            <div className="page-title-area ptb-100">
                <div className="container">
                <div className="page-title-content">
                <h1>Team</h1>
                <ul>
                <li className="item"><a href="index.html">Home</a></li>
                <li className="item active"><span></span>Team</li>
                </ul>
                </div>
                </div>
                <div className="bg-image">
                <img src={Teambanner} alt={Teambanner} />
                </div>
                </div>


                <div className="team-single-area ptb-100">
                    <section id="team" className="team-section-two">
                        <div className="container">
                            <div className="top-content">
                                <div className="title">
                                    <span className="sub-title">Team</span>
                                    <h2>Dedicated Employee</h2>
                                </div>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur voluptatibus quaerat laborum.</p>
                            </div>
                            <div className="row justify-content-center">
                            
                            {Teamsource.map((val) => {     // fat arrow function use
                                return (
                                    <Teamcard 
                                    key = {val.id}
                                    imgsrc= {val.imgsrc}
                                    ctitle= {val.ctitle}
                                    ctext= {val.ctext}
                                    links= {val.links}
                                    />
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

export default Team;