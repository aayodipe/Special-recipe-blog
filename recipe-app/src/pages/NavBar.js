import React from 'react';
import {Link} from 'react-router-dom'
const NavBar = ()=> (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/article-list">Article List</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          
        </ul>
    </nav>
)
 
export default NavBar