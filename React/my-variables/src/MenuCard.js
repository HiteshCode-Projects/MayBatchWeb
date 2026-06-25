import React from "react";
import './Card.css'


function Card(){

    return(
        <div className="menu">
           
           <div className="product">
            <img src="https://images.pexels.com/photos/17402721/pexels-photo-17402721.jpeg" alt="Pizza" height="200" width="250" />
            <h2>Pizza</h2>
            <p>Rs 555.00</p>
            <button>Buy Now</button>
           </div>

        </div>
    )
}

export default Card