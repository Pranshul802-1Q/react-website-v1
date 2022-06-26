import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1-1.mp4' autoPlay loop muted />
      <h1>Healthify your World</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
     
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET STARTED
        </Button>*/}
        <Link to="/video"> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={Link} to='/video'
          
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </Link>
       
      </div>
    </div>
  );
}

export default HeroSection;
