import React from 'react';
import OpenModal from '../modal/OpenModal';

const TeachersCommunity = () => {
  return (
    <div className="tile is-parent">
        <article className="tile is-child box">
            <p className="title">Teachers Community</p>
            <p className="subtitle">What is up?</p>
            <OpenModal />
        </article>
    </div>
  )
}

export default TeachersCommunity;