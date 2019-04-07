import React from 'react';
import OpenModal from '../modal/OpenModal';

const WordPress = () => {
  return (
    <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">WordPress</p>
            <p className="subtitle">What is up?</p>
            <OpenModal />
        </article>
    </div>
  )
}

export default WordPress