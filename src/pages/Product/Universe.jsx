import React from 'react';
import {Link} from "react-router-dom";

function Universe() {
    return ( 
        <>
       <div className='universe'>
        <h2>Want to know more about our technology stack? Check out the StockFusion.tech blog.</h2>
        <h1>The StockFusion Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='image'>
            <div className='img'>
                <img src="/images/smallcaseLogo.png"/>
            </div>
            <div className='img'>
            <img src="/images/streakLogo.png"/>
            </div>
            <div className='img'>
            <img src="/images/sensibullLogo.svg"/>
            </div>
            <div className='img'>
            <img src="/images/zerodhaFundhouse.png"/>
            </div>
            <div className='img'>
            <img src="/images/dittoLogo.png"/>
            </div>
            <div className='img'>
            <img src="/images/goldenpiLogo.png"/>
            </div>
        </div>
       <Link to="/signup> <button type="button" class="btn btn-primary unv-button ">Sign Up Now</button></Link>
       </div>
        </>
     );
}

export default Universe;
