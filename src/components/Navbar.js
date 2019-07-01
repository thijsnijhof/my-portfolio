import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src={Logo} width="112" height="28"/>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenuHeroC">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <a href="/" className="navbar-item is-active">Home</a>
              <a href="#about" className="navbar-item">About</a>
              <a href="#portfolio" className="navbar-item">Portfolio</a>
              <span className="navbar-item">
                <a id="contact" href="#contact-me" className="button link-button link-button-bg" >
                <FontAwesomeIcon icon={faEnvelope} style={{marginRight:'.75rem'}}/><span>Contact Me</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
