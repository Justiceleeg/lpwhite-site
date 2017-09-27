import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavSection.css';



//functional component (not class component)
const NavSection = () => {
//window.location.hash
const navimg = "https://tint-blog.s3.amazonaws.com/blog/wp-content/uploads/2013/05/Beautiful-Model-and-Examples-of-Instagram-Photography-011.jpg"

    return (
        <div>
            <nav className="flex-center">
                <div className="polaroid">
                    <img className="polarimg" src={navimg} alt="profile"/>
                    <ul className="nav-social">
                        <a href="#"><li>Facebook</li></a>
                        <li>-</li>
                        <a href="#"><li>Instagram</li></a>
                        <li>-</li>
                        <a href="#"><li>Twitter</li></a>
                    </ul>
                </div>
                <ul className="nav-sidebar">
                    <Link to="/about"><li className="nav-sidebar-items">About</li></Link>
                    <Link to="/writing"><li className="nav-sidebar-items">Writing</li></Link>
                    <Link to="/now"><li className="nav-sidebar-items">Now</li></Link>
                </ul>
            </nav>
            <div className="nav-name">Liz P. White</div>
        </div>
    )
    
}

export default NavSection;
