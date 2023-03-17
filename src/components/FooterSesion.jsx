import React from 'react'
import "./FooterSesion.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'



function FooterSesion ()  {

  return (
    <Nav className='footer'
     
    >
      <Nav.Item >
        <Link className='footer-text' to='/'>© Art&Enjoy 2023 Spain S.L.</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='footer-text' to='/CookiesPolicy' href="#CookiesPolicy">Política de privacidad</Link>
      </Nav.Item>
      <Nav.Item>
        <Link  className='footer-text' to='/AboutUs' href="#AboutUs">Contacto</Link>
      </Nav.Item> 
      <Nav.Item>
        <Link  className='footer-text' to='/Questions' href="#Questions">Preguntas frecuentes</Link>
      </Nav.Item>
  
       <Nav.Item>
        <Link className='footer-text' > <img src={facebook} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={instagram} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
      <Nav.Item>
        <Link className='footer-text' > <img src={twitter} alt="ArtEnjoy"className='socialmedia'/>       
        </Link>
      </Nav.Item> 
    </Nav>
  
 );
}
export default FooterSesion;