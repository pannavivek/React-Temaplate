import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  
    //const [show, setShow] = useState(true);  
    return (
        <>
            <header className="header-area">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <ul className="quick-links">
                                <li className="nav-item">
                                    <NavLink to="career" className="nav-link">Career</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/help" className="nav-link">Help</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <NavLink to="/contact" className="primary-btn">
                                Get a Quote
                                </NavLink>
                        </div>
                    </div>
                </div>


                <div className="main-navbar-area">
                    
                    
                        <Nav />
                        
                </div>

            </header>
        </>
    )
}

export default Header;