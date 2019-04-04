import React from 'react'
import pic from '../../assets/thijs.jpeg';

// const bg = {
//   backgroundImage:`url(${pic})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   backgroundImage:'linear-gradient(,black)',
// }
const LumiFlow = () => {
  return (
    <div className="tile is-parent" >
        <article className="tile is-child box" >
            <p className="title">LumiFlow</p>
            <p className="subtitle">What is up?</p>
        </article>
    </div>
  )
}

export default LumiFlow
