import React, { useState, useEffect } from 'react';
import "./Home.css";
import homeImage from "./assets/home.jpg";
import Button from '../button/Button';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function Home() {
  const [color, setColor] = useState(true);

  const [text] = useTypewriter({
    words: ["JCI Mornaguia"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  useEffect(() => {
    if (text === "") {
      setColor(prev => !prev);
    }
  }, [text]);

  return (
    <section id='home' className='home'>
      <div className="intro">
        <h1>
          This is{" "}
          <span style={{ color: color ? "#EDBE38" : "#0097D7" }}>
            {text}
            <Cursor />
          </span>
          <br />
          <span className='white'>Official Website</span>
        </h1>
        <p>
        A hub for innovation, leadership, and community-driven impact
        </p>
        <Button text={"Contact"} to="#contact"></Button>
      </div>
      <img src={homeImage} alt="group photo" />
    </section>
  );
}

export default Home;
