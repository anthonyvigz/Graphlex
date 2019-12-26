import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import navLogo from '../img/Single-G.png';

function NavBar() {
  let location = useLocation();

  let navbar = "navbar";
  let asp = "as";

    return (
            <nav className={navbar}>
            <img src={navLogo} className="navLogo" />
            <div className="links">
                <NavLink className={asp} activeClassName="selected" exact to="/">HOME</NavLink>
                <NavLink className={asp} activeClassName="selected" to="/about">ABOUT</NavLink>
                <NavLink className={asp} activeClassName="selected" to="/services">SERVICES</NavLink>
                <NavLink className={asp} activeClassName="selected" to="/work">WORK</NavLink>
                <NavLink className={asp} activeClassName="selected" to="/contact">CONTACT</NavLink>
            </div>
            </nav>
    )
}

export default NavBar;
