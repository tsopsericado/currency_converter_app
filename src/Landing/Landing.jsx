import React from 'react'
import "./Landing.css";
import Navbar from '../Navbar/Navbar';


import { Link } from 'react-router-dom';

import logo1 from '../images/logo1.png';


export default function Landing() {
  return (
    <div className="container">
      <Navbar />
      <div className="home__main">
        <h1>
          <i>Welcome to your currency Exchange App </i>
        </h1>
        <img src={logo1} alt="money" className="logo" />
        <h2>click on the button below to get started</h2>
        <button type="button">
          <Link to="/currency" className="home__link">
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
}


