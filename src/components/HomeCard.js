import React from "react";
import photo from '../assets/thijs.jpeg';

const border = {
  borderRadius: '10px'
}
const HomeCard = () => {
  return (
    <div className="hero-body">
       <div className="container has-text-centered">
        <div className="card column is-one-third is-offset-one-third " style={border}>
          <div className="card-image">
            <figure className="image container is-128x128">
              <img
                src={photo}
                alt="Placeholder image"
                className="is-rounded"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              
              <div className="media-content has-text-centered" >
                <p className="title is-4" style={{"color":"#333"}}>Hi, I'm Thijs!</p>
                <p className="subtitle is-6" style={{"color":"#555"}}>I design and develop web applications.</p>
                <div className="buttons are-medium is-centered">
                    <a href="#about" className="button is-success is-outlined">About me</a>
                    <a href="#portfolio" className="button is-success is-outlined">Portfolio</a>
                </div>
              </div>
            </div>

          </div>
        </div>
       </div>
     </div>
  );
};

export default HomeCard;
