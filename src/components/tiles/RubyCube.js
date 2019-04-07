import React from 'react';
import OpenModal from '../modal/OpenModal';

const RubyCube = () => {
  return (
    <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">RubyCube</p>
            <p className="subtitle">What is up?</p>
            <OpenModal />
        </article>
    </div>
  )
}

export default RubyCube;