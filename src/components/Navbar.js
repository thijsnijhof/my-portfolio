import React from "react";

const Navbar = () => {
  return (
    <div className="hero-head">
      <header className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <h1>LOGO</h1>
            </a>
            <span
              className="navbar-burger burger"
              data-target="navbarMenuHeroC"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroC" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item is-active">Home</a>
              <a className="navbar-item">About</a>
              <a className="navbar-item">Portfolio</a>
              <span className="navbar-item">
                <a className="button is-success is-inverted is-outlined">
                  <span>Contact Me</span>
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
