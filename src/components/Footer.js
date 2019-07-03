import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer has-background-success">
      <div className="content has-text-centered has-text-white">
        <div className="columns">
          <section className="column">
            <p>
              <strong className="has-text-white">Thijs Nijhof</strong> -
              <a href="#about" className="has-text-white"> About </a>
              <a href="#portfolio" className="has-text-white"> Portfolio </a>
              <a href="#contact-me" className="has-text-white"> Contact </a>
            </p>
          </section>
          <section className="column">
            <a href="https://github.com/thijsnijhof">
              <FontAwesomeIcon className="has-text-white" icon={faGithub} />
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
