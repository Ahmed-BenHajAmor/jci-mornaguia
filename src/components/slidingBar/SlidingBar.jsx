import React from 'react'
import "./SlidingBar.css"
import {SectionHeader} from "../sectionHeader"
import logo from "./assets/logo.png"
function SlidingBar() {
  return (
    <section id='partners' className="sliding-section">
      <SectionHeader title="Our partners" description="ahmed ben haj amor"/>
      <div className="sliding-bar">
        <div className="slide">
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
        </div>
        <div className="slide">
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
          <img src={logo} alt="logo" />
        </div>
      </div>
     
    </section>
  )
}

export default SlidingBar