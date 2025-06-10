import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav>
            {/* < img src= null ></img> */}
            <Link to='/'>Home</Link> | <Link to='/About'>About</Link> |  <Link to='/Contact'>Contact</Link>
        </nav>
    )
}