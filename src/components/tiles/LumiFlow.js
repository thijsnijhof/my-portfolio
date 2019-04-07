import React from 'react';
// import pic from '../../assets/thijs.jpeg';
import OpenModal from '../modal/OpenModal';

const content = {
  
}
const LumiFlow = () => {
  return (
    <div className="tile is-parent " >
        <article className="tile is-child box " >
            <p className="title">LumiFlow</p>
            <p className="subtitle">What is up?</p>
            <OpenModal />
        </article>
    </div>
  )
}

export default LumiFlow
