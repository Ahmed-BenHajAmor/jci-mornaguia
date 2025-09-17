import React, { useState } from 'react';
import "./NavBar.css";
import { links } from './config';
import logo from "./assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
function NavBar (){
  const [showBurger,setShowBurger] = useState(false)
  return (
    <nav>
      <div>

      <img src={logo} alt="jci mornaguia" />
      <ul className="links">
        {links.map(link=>{
          return <li key={link.text}><a href={link.to}>{link.text}</a></li>
        })}
      </ul>
      <div className='burger'>
        <MenuIcon onClick={()=>setShowBurger(prev=>!prev)} />
      </div>
      
      </div>
      <ul className={`menu ${showBurger && "show"}`}>
        {links.map(link=>{
          return <li key={link.text}><a href={link.to}>{link.text}</a></li>
        })}
      </ul>
    </nav>
  )
}

export default NavBar;
