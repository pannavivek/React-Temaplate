import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <section className="error-area">
                <div className="container">
                    <div className="error-content">
                        <div className="error-text">
                            <h1>404</h1>
                        </div>
                            <h3>Ops! Page Not Found</h3>
                            <p>
                                The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                            </p>
                            <NavLink to="/" className="primary-btn">Back to Home</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error;