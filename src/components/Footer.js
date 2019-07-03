import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer has-background-success">
      <div className="content has-text-centered has-text-white">
        <p>
          <strong className="has-text-white">Thijs Nijhof</strong> - Portfolio
          <a href="https://github.com/thijsnijhof">
            <FontAwesomeIcon className="has-text-white" icon={faGithub} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
