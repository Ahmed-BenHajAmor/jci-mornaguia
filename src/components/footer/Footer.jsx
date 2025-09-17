import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"
import logo from "./assets/logo.png"
function Footer() {
  return (
    <footer>
        <img src={logo} alt="jci mornaguia" />
        <div className='social-media-icons'>
          <a href=""><FacebookIcon /></a>
          <a href=""><InstagramIcon /></a>
          <a href=""><LinkedInIcon /></a>
        </div>
        <p>+216-92 568 095</p>
        <p>ahmed.benhajamorr@gmail.com</p>
    </footer>
  )
}

export default Footer