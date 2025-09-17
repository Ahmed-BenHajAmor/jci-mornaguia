import React from 'react'
import aboutImage from "./assets/home.jpg"
import Button from '../button/Button';
import "./About.css";
function About() {
  return (
    <section className="about" id='about'>
        <div className='about-body'>
          <img src={aboutImage} alt="group photo" />
          <div className="about-content">
            <h2>Who we are ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At id quod quia ipsum. Asperiores, rerum autem beatae eveniet doloribus consequuntur illum deleniti voluptate velit quia, blanditiis est! Commodi, nisi obcaecati.</p>
            <Button text={"Learn more"} to="#"></Button>
          </div>
        </div>
    </section>
  )
}

export default About