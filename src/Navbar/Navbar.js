import React from 'react'
import logo1 from "../images/logo1.png";


function Navbar() {

  return (
    <nav>
      <img src={logo1} alt="" />
      <div className="navbar-links-container">

        <button className='primary-button'>Convert now</button>
      </div>
    </nav>
  );
}

export default Navbar
