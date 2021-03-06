import React from 'react';
import logo from '../images/Component 10 – 1.png';
import before from '../images/Component 11 – 1.png';
import play from '../images/Component 12 – 1.png';
import after from '../images/Component 13 – 1.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="nav-bar">
            <div className = "nav-container">
                <div className = "logo">
                    <img src={logo} alt="book hero" />
                </div>

                <div className = "main-menu">
                    <ul>
                        <Link to = "/">
                            <li className = "active"><a href>Browse</a></li>
                        </Link>
                        <Link to = "/wishlist">
                            <li><a href>Wish List</a></li>
                        </Link>
                        <Link to = "/subscriptions">
                            <li><a href>Subscriptions</a></li>
                        </Link>
                        <Link to = "/wallet">
                            <li><a href>Wallet</a></li>
                        </Link>
                    </ul>
                </div>

                <div className = "now-playing">
                    <h2>Continue Reading</h2>
                    <div className = "current-book"></div> 
                    <div className = "play-buttons">
                        <img src = {before} alt = "prev" />
                        <img src = {play} alt = "prev" />
                        <img src = {after} alt = "prev" />
                    </div>
                </div>
            </div>
        </div>
    )
}
