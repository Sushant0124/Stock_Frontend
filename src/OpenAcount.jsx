import React from 'react';
import "./Style.css";
import { Link } from "react-router-dom";
function OpenAccount() {
    return ( 
        <>
        <div className='openAccount'>
        <h2 className="oc-title">Open a StockFusion account</h2>
       <h5 className="oc-description" >Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</h5>
      <Link to="/signup> <button type="button" className="btn btn-primary oc-button ">Sign Up Now</button></Link>
            
        </div>
        </>
     );
}

export default OpenAccount;
