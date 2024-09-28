import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";

function Hero() {
    return ( 
        <>
        <div className='hero'>
       <img src='/images/homeHero.png' alt='HeroImage' className="hero-image" />
       <h1 className="hero-title">Invest in everything</h1>
       <h5 className="hero-description" >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
      <Link to="/signup"> <button type="button" className="btn btn-primary hero-button">Sign Up Now</button></Link>
        </div>
        </>
     );
}

export default Hero;
