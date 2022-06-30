import React,{ useRef } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs, {init} from '@emailjs/browser';




function Footer() {
  const form=useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    
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
            
            <Link to='/video'>About Us</Link>
            <p>32nd Avenue
               Park Street<br/>
               Mussoorie, Uttarakhand<br/>
               P.O Box Barlowganj<br/>
               248122.<br/>
               8 Branches across Uttarakhand.
            </p>
           
          </div>
          <div class='footer-link-items'>
            
            <Link to='/video'>Contact US</Link>
            <div class='link-items-child'>
              <img class='footer-link-img' src='/images/mail.png'></img>  
              <p> organicvillage@gmail.com</p>
            </div>
            <div class='link-items-child'>
              <img class='footer-link-img' src='/images/phone.png'></img>  
              <p> +91-9557998452</p>
            </div>
            <div class='link-items-child'>
              <img class='footer-link-img' src='/images/whatsapp-121.png'></img>  
              <p> +91-7351792559</p>
            </div>
           
          </div>
       
       
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
          
             
          </div>
        </div>
      </section>
    </div>
    
  );
}





export default Footer;
