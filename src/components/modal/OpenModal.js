import React, { Component } from 'react'
import Modal from './Modal';

export default class OpenModal extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isActive:false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState((prev, props) => {
            const newState = !prev.isActive;
            return { isActive : newState}
        });
    }
  render() {
    return (
      <div>
        <button className="button is-success is-outlined" onClick={this.handleClick}>More</button>
        <Modal closeModal={this.handleClick} isActive={this.state.isActive} />
      </div>
    )
  }
}

