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
            <p>
            The JCI is a global federation founded in 1915, bringing together over 200,000 young leaders and entrepreneurs across more than 100 countries, working for a more inclusive and sustainable world through projects and training.<br/><br/>
In Tunisia, it was established in 1961 thanks to Dr. Salah El Mehdi and Ferjani Belhaj Ammar, with Hassib Ben Ammar as its first president.
<br/><br/>JCI Mornaguia, founded in 2020 by Mahmoud Abdelkhalak, quickly became a key regional and national player.
It has organized numerous events, trained more than 250 young people, carried out over 24 impactful projects, and won 10 national and zonal awards.
With over 7,500 engaged followers, JCI Mornaguia reflects the energy and passion of young active citizens who work to transform their community.

            </p>
            <Button text={"Learn more"} to="#"></Button>
          </div>
        </div>
    </section>
  )
}

export default About