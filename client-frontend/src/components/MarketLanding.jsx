import React from 'react';
import "./MarketLanding.css";
import Navbar from './Navbar';

const Shop = ({ object, properties, size , imgUrl, price}) => {
    return (
      <div className='card'>
        <div className='card-head'>
         <h2 className='card-h'>{object}</h2>
         <img src={imgUrl} alt="" className="image_al" />
        </div>
         <div className='descrip'>
         {properties}
         <div className='buy'>
           <strong>Price:</strong> {price} $Tribe
          <button className='bttn3'>Buy Now</button>
         </div>
         </div>
   
       </div>
    )
}  
const MarketLanding = () => {
  return (
    <div className="master">
      <div className="donate">
      <div className="title">
        <Navbar />
      </div>
      <Shop
        object='NFT Tickets Mint '
        properties="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. "
        imgUrl={require("../images/MarketPlace/Nft_Tickets.png")}
        price="30"
      />
      <Shop 
        object='Customs Tshirts '
        properties="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. "
        imgUrl={require("../images/MarketPlace/tshirt.jpg")}
        price="70"
      />
      <Shop 
        object='Custom Hoodies'
        properties="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. "
        imgUrl={require("../images/MarketPlace/hoodies.png")}
        price="50"
      />
    </div>
    </div>
 
 )

}


export default MarketLanding
