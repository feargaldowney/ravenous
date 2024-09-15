import React from 'react';

function Business({ business }){
    
  return (
    <div className="business">
        <div className="image-container">
            <img src = {business.imageSrc} alt = ''/>
            <h2>{business.name}</h2>
        </div>
        <div className="business-information">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{business.state}</p>
            <p>{business.zipCode}</p>
        </div>
        <div className="business-reviews">
            <h3>{business.category}</h3>
            <h5>{business.rating} stars</h5>
            <p>{business.reviewCount}</p>
        </div>
    </div>
  );
}

export default Business;