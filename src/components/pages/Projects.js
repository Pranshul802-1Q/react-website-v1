import React from 'react';
import '../../App.css';
// import Cards from '../Cards';
// import HeroSection from '../HeroSection';
// import Footer from '../Footer';
import Dehradun from './Dehradun';
import Rishikesh from './rishikesh';

function Projects() {
  return (
    <>
      <Rishikesh/>
      <div className='spacer'></div>
      <Dehradun/>
    </>
  );
}

export default Projects;
