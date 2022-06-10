import React, { Component } from 'react';
import ProfilePic from '../assets/profilePic.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div class="about">
        <div class="profilePic">
          <img class="pic" src={ProfilePic} alt="Profile Pic"/>
        </div>
        <div class="name">
          <h4>Ajay Bhatia</h4>
        </div>
        
      </div>
    )
  }
}