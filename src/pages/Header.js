import React from "react";
// Icon link
import { FaBook } from "react-icons/fa";
// Style link
import "../component/Header.css"

function Header(){
  return(
    <div className="header">
      <div className="logo">
        <a href="#">I<span>D</span>A</a>
      </div>
      <div className="nav-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
          <button className="menu-btn"><FaBook className="menu-icon"/></button>
      </div>
    </div>
  )
}

export default Header;