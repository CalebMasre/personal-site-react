import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">CW</div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#possibility">Future</a></p>
          <p><a href="#courses">Courses</a></p>
          <p><a href="#blog">Library</a></p>
          <p><a href="#chat">Chat</a></p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">Experience</a></p>
            <p><a href="#possibility">Future</a></p>
            <p><a href="#courses">Courses</a></p>
            <p><a href="#blog">Library</a></p>
            <p><a href="#chat">Chat</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
