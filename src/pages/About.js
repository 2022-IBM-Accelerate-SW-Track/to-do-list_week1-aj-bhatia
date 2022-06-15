import React, { Component } from 'react';
import {Grid, Button, makeStyles, Card} from "@material-ui/core";
import {MDCRipple} from '@material/ripple';
import ProfilePic from '../assets/profilePic.jpg';
import linkedInPic from '../assets/linkedin.png';
import twitterPic from '../assets/twitter.png';
import instagramPic from '../assets/instagram.png';
import githubPic from '../assets/github.png';
import './About.css';
  

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

export default class About extends Component {
  render() {
    return (
      <div class="about">
        <div class="header">

          <div class="links">
            <a id="linkedIn" class="button" href="https://www.linkedin.com/in/aj-bhatia/"><img class="mediaPic" alt="LinkedIn" src={linkedInPic}/></a>
            <a id="github" class="button" href="https://github.com/aj-bhatia"><img class="mediaPic" alt="GitHub" src={githubPic}/></a>
          </div>
          
          <div class="name">
            <h2>Ajay Bhatia</h2>
          </div>

          <div class="links">
            <a id="twitter" class="button" href="https://twitter.com/aj__bhatia"><img class="mediaPic" alt="Twitter" src={twitterPic}/></a>
            <a id="instagram" class="button" href="https://www.instagram.com/ajay_bhatiaa/"><img class="mediaPic" alt="Instagram" src={instagramPic}/></a>
          </div>
        </div>

        <div class="description">

          <div class="profilePic">
            <img class="pic" src={ProfilePic} alt="Profile Pic"/>
          </div>

          <div class="cards">
            <div class="career card">
              <div class="card-header">
                Career:
              </div>
              <div class="card-content">
                <div class="bullet">
                  Software & Data Intern at HPE
                </div>
                <div class="bullet">
                  Accelerate '22 at IBM, Software Track
                </div>
                <div class="bullet">
                  Studying CS at UC Santa Cruz
                </div>
                <div class="bullet">
                  Full-stack development
                </div>
              </div>
            </div>
            <div class="personal card">
              <div class="card-header">
                Personal Intertests:
              </div>
              <div class="card-content">
                <div class="bullet">
                  Cooking and trying weird foods
                </div>
                <div class="bullet">
                  Traveling and seeing new places
                </div>
                <div class="bullet">
                  Exercising and running            
                </div>
                <div class="bullet">
                  Building keyboards
                </div>
              </div>
            </div>
            <div class="activites card">
              <div class="card-header">
                Clubs & Activities:
              </div>
              <div class="card-content">
                <div class="bullet">
                  Guayaki Ambassador
                </div>
                <div class="bullet">
                  Fish Rap Live! Satire News Paper
                </div>
                <div class="bullet">
                  UCSC Valorant Team Captain
                </div>
                <div class="bullet">
                  CruzHacks Logistics Organizer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}