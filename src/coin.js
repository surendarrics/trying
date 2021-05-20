import React from 'react';
import './coin.css';

const coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div>
            
        <div className="coin-container">
            
          <div className="coin-row">
          
<div className="coin">
    <img src={image} alt={name} />
    
    <h1>{name}</h1>
    <p className="coin-symbol">{symbol}</p>
</div>
    <div className="coin-data">
  
        <p className="coin-price">
     
            ₹{price.toLocaleString()}</p>
        <p className="coin-volume">
          
            ₹{volume.toLocaleString()}</p>
        {priceChange < 0 ? (
     <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
 ) : (
 <p className="coin-percent green">{priceChange.toFixed(2)}%</p>)

}
 <p className="coin-marketcap">mkt cap:₹{marketcap.toLocaleString()}</p>
    </div>
    </div>  
        </div>
        </div>
    )
}

export default coin
