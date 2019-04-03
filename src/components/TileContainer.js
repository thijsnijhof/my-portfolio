import React, { Component } from 'react';
import LumiFlow from './tiles/LumiFlow';

export default class TileContainer extends Component {
  render() {
    return (
        <section className="section hero is-fullheight">
            <div className="tile is-ancestor">
                <LumiFlow />
                <LumiFlow />
                <LumiFlow />
            </div>
        
        </section>
    )
  }
}
