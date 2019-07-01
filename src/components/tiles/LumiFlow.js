import React from 'react';
// import pic from '../../assets/thijs.jpeg';
// import OpenModal from '../modal/OpenModal';

import GithubButton from '../GithubButton';
import WebButton from '../WebButton';

const LumiFlow = () => {
  return (
    <div className="tile is-parent " >
        <article className="tile is-child box " >
            <p className="title">LumiFlow</p>
            <div className="tags are-medium is-centered">
              <span className="tag is-light">VueJS</span>
              <span className="tag is-light">Arduino</span>
              <span className="tag is-light">Particle.io</span>
            </div>
            <div className="content">
                
            </div>
            <div className="buttons is-centered">
                <GithubButton url="/" />
                <WebButton url ="/" />
            </div>
                
        </article>
    </div>
  )
}

export default LumiFlow;
