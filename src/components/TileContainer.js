import React from "react";

import Tile from "../components/tiles/Tile";

import portfolio from "../data/tiles.json";

const TileContainer = () => {
  console.log(portfolio);
  const projects = portfolio.projects.map((project, i) => {
    return (
      <Tile
        key={i}
        name={project.name}
        content={project.content}
        githubURL={project.githubURL}
        liveURL={project.liveURL}
        stack={project.stack}
      />
    );
  });
  return (
    <section id="portfolio" className="section hero is-fullheight">
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          {projects[0]}
          {projects[1]}
        </div>
        <div className="tile is-vertical">
          {projects[2]}
          {projects[3]}
        </div>
        <div className="tile is-vertical ">
          {projects[4]}
          {projects[5]}
        </div>
      </div>
    </section>
  );
};

export default TileContainer;
