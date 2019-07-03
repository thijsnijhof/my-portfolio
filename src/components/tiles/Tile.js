import React from "react";
// import pic from '../../assets/thijs.jpeg';
// import OpenModal from '../modal/OpenModal';

import GithubButton from "../GithubButton";
import WebButton from "../WebButton";

const Tile = ({ name, content, githubURL, liveURL, stack }) => {
  return (
    <div className="tile is-parent ">
      <article className="tile is-child box ">
        <p className="title">{name}</p>
        <div className="tags are-medium is-centered">
          {stack.map((tag, i) => {
            return (
              <span key={i} className="tag is-light">
                {tag}
              </span>
            );
          })}
        </div>
        <div className="content">{content}</div>
        <div className="buttons is-centered">
          <GithubButton url={githubURL} />
          <WebButton url={liveURL} />
        </div>
      </article>
    </div>
  );
};

export default Tile;
