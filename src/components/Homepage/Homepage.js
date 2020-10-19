import React from 'react';
import { Link } from "react-router-dom";
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="homepage-main">
        <div className="homepage-text">Hello!</div>
        <div className="homepage-text">I'm <span className="name">Margarida Sousa</span>,</div>
        <div className="homepage-text">I'm a <span>Web Developer</span> based in Lisbon, Portugal.</div>
      </div>
      <div className="pages-section">
        <Link to="/portfolio">
          <button className="homepage-button">Portfolio</button>
        </Link>
        <Link to="/about">
          <button className="homepage-button">About</button>
        </Link>
        <Link to="/contact">
          <button className="homepage-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}
 
export default Homepage;