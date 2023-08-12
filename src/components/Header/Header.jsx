import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [hamburger, setHamburger] = useState("d-none");

    const handleHamburger = () => {
        if (hamburger === "d-none") {
            setHamburger("d-md-flex");
        } else {
            setHamburger("d-none");
        }
    };

    return (
        <header className="sticky-top bg-success shadow-md">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand text-success font-weight-bold" to="/">HealthApp</Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleHamburger}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse justify-content-md-end ${hamburger}`} id="menu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-success font-weight-bold"
                                    to="/"
                                    onClick={handleHamburger}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-success font-weight-bold"
                                    to="/diet"
                                    onClick={handleHamburger}
                                >
                                    Diet
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-success font-weight-bold"
                                    to="/yoga"
                                    onClick={handleHamburger}
                                >
                                    Yoga & Exercise
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link text-success font-weight-bold"
                                    to="/entertainment"
                                    onClick={handleHamburger}
                                >
                                    Entertainment
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link text-success font-weight-bold"
                                    to="/bmi"
                                    onClick={handleHamburger}
                                >
                                    BMI
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
