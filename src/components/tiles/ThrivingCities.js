import React from 'react';
import OpenModal from '../modal/OpenModal';

const ThrivingCities = () => {
  return (
    <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">ThrivingCities</p>
            <p className="subtitle">What is up?</p>
            <OpenModal />
        </article>
    </div>
  )
}

export default ThrivingCities;