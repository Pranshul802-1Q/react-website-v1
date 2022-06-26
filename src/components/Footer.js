import React,{ useRef } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs, {init} from '@emailjs/browser';
















function Footer() {
  const form=useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    var templateParams = {
      email: form.email
  };
    emailjs.sendForm("service_y9y8lgt","template_p8583wk",form.current,"6SP5uInQB7dnoUkIV").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the revolution and transform your world
        </p>
        <p className='footer-subscription-text'>
          You will see the change it brings about
        </p>
        <div className='input-areas'>
          <form  onSubmit={handleSubmit}  ref={form}>
            <input id='email'
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button type={'submit'}
	 buttonStyle='btn--outline'>Subscribe</Button>
          </form>
          
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            {/* <h2>About Us</h2> */}
            <Link to='/video'>About Us</Link>
            {/* <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          </div>
          <div class='footer-link-items'>
            {/* <h2>Contact Us</h2> */}
            <Link to='/video'>Contact US</Link>
            {/* <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            {/* <h2>Videos</h2> */}
            <Link to='/video'>Submit Video</Link>
            {/* <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
          {/* <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div> */}
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Organic Village
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>OrganicVillage © 2022</small>
          <div class='social-icons'>
            <a   href="javascript:void (window.open('https://www.facebook.com/pranshul.thapliyal','_blank'))">
              <img src='/images/facebook.png' width="40" height="40"></img>
            </a>

            <a   href="javascript:void (window.open('https://www.instagram.com/pranshuldj/','_blank'))">
              <img src='/images/instagram.png' width="40" height="40"></img>
            </a>

            <a   href="javascript:void (window.open('https://www.youtube.com/channel/UCoLCRv10lfC10ewgB1beRhQ','_blank'))">
              <img src='/images/youtube.png' width="40" height="40"></img>
            </a>

            <a   href="javascript:void (window.open('https://www.linkedin.com/in/pranshul-thapliyal-21320a212/','_blank'))">
              <img src='/images/linkedin.png' width="40" height="40"></img>
            </a>
          
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              
              <i class='fab fa-facebook-f' />
             
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link> */}
          </div>
        </div>
      </section>
    </div>
    
  );
}





export default Footer;
