import React, { useState } from "react";
import './navbar.css';
import navbarlogo from '../../assets/navbar-logo.png';
import {
    Link, NavLink
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <Link to='/portfolio'><img src={navbarlogo} alt="navbar-logo" className="logo"/></Link>
            <div className="desktopMenu">

                {/* <Link className="desktopMenuListItem"  to="/">Home</Link>
                <Link className="desktopMenuListItem" to="/educationandcertification">Education and Certification</Link>
                <Link className="desktopMenuListItem" to="/workexperience">Work Exp</Link>
                <Link className="desktopMenuListItem" to="/skills">Skills</Link>
                <Link className="desktopMenuListItem" to="/projects">Projects</Link>
                <Link className="desktopMenuListItem" to="/githubrepo">Github Repos</Link> */}

                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"}  to="/portfolio">Home</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"} to="/portfolio/educationandcertification">Education and Certification</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"} to="/portfolio/workexperience">Work Exp</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"} to="/portfolio/skills">Skills</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"} to="/portfolio/projects">Projects</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "desktopMenuListItem pending" : isActive ? "desktopMenuListItem active" : "desktopMenuListItem"} to="/portfolio/githubrepo">Github Repos</NavLink>

            </div>
            <FontAwesomeIcon icon={faBars} className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display : showMenu ? 'flex': 'none'}}>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"}  to="/portfolio" onClick={()=>setShowMenu(false)}>Home</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"} to="/portfolio/educationandcertification" onClick={()=>setShowMenu(false)}>Education and Certification</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"} to="/portfolio/workexperience" onClick={()=>setShowMenu(false)}>Work Exp</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"} to="/portfolio/skills" onClick={()=>setShowMenu(false)}>Skills</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"} to="/portfolio/projects" onClick={()=>setShowMenu(false)}>Projects</NavLink>
                <NavLink className={({ isActive, isPending }) => isPending ? "listItem pending" : isActive ? "listItem active" : "listItem"} to="/portfolio/githubrepo" onClick={()=>setShowMenu(false)}>Github Repos</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;