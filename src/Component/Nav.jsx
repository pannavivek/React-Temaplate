import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../logo.png';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Darkmode from './Darkmode';

const Nav = () => {

    
    const [show, setShow] = useState(false); 
    return (
        <>

                <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                            <NavLink className="navbar-brand" to="/">
                                    <img src={logo}  alt="Logo" />
                                </NavLink>
                                <div className="navbar-collapse mean-menu">
                                    <ul className= {show ? "mean-bar-mobile ml-auto": "navbar-nav ml-auto"}>
                                        <li className="nav-item">
                                             <NavLink  exact activeClassName="active"  to ="/" className="nav-link">Home</NavLink>
                                                
                                        </li>
                                        <li className="nav-item">
                                             <NavLink exact activeClassName="active" to ="/about" className="nav-link">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a href="/#" className="nav-link toggle">Pages <KeyboardArrowDownIcon /></a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <NavLink exact activeClassName="active" to ="/team" className="nav-link">Team</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink exact activeClassName="active" to ="/abowut" className="nav-link">Career</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink exact activeClassName="active" to ="/faq" className="nav-link">Faq</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink exact activeClassName="active" to ="/404" className="nav-link">Error</NavLink>
                                                </li>
                                                
                                            </ul>
                                        </li> 
                                            <li className="nav-item">
                                                          <NavLink exact activeClassName="active" to ="/services" className="nav-link">Services</NavLink>
                                                        </li>
                                            <li className="nav-item">
                                                        <NavLink exact activeClassName="active" to ="/projects"className="nav-link">Projects</NavLink>
                                             </li>
                                                   

                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active" to ="/contact" className="nav-link">Contact Us</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink exact activeClassName="active" to ="/country" className="nav-link">Country</NavLink>
                                            </li>
                                            <li>
                                            <Darkmode />
                                            </li>
                                        </ul>
                                        
                                </div>
                                <button className="mobile-menu-icon" onClick={ () => setShow (!show) }>

                                    { show ? (
                                        <i className="fa fa-times"></i>
                                    ) : (
                                        <i className="fa fa-bars"></i>
                                    )} </button>
                                
                             </nav>
                       
                        </div>
                    </div>
                    
             </>
    );

}
export default Nav;