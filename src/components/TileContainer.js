import React, { Component } from 'react';
import LumiFlow from './tiles/LumiFlow';
import Tutaki from './tiles/Tutaki';
import NameGenerator from './tiles/NameGenerator';
import RubyCube from './tiles/RubyCube';
import WordPress from './tiles/WordPress';
import ThrivingCities from './tiles/ThrivingCities';

export default class TileContainer extends Component {
  render() {
    return (
        <section className="section hero is-fullheight">
            <div className="tile is-ancestor">
              <div className="tile is-vertical">
                  <LumiFlow />
                  <Tutaki />
              </div>
                <div className="tile is-vertical is-4">
                  <NameGenerator />
                  <ThrivingCities />
                
                </div>
                <div className="tile is-vertical">
                  <RubyCube />
                  <WordPress />
                </div>
                
            </div>
        
        </section>
    )
  }
}
