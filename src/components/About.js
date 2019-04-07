import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
        <section id="about" className="section hero is-fullheight">
          <div className="content column is-half is-offset-one-quarter is-medium is-centered">
            <h1 className="title is-2">Hi, I'm Thijs Nijhof.</h1>
            
            <p>During my degree in <i>Creative Media and Game Technologies</i> I fell in love with programming.
            It brings products to life. I enjoy building and delivering a great user experience.
            </p>
            <h3 className="title is-4">Skills</h3>
            <p>To develop applications I use the following languages and tools:</p>
            <p>HTML, CSS, JavaScript, React, NodeJS, PHP, WordPress, Git, Webpack.</p>
            
          </div>
        </section>
    )
  }
}
