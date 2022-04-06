import React from 'react';
import './Business.css';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: "Marc's Tacocs",
    address: '123 StreetName',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '12345',
    category: 'Mexican',
    rating: 4.5,
    reviewCount: 101
}

class Business extends React.Component {
    
    render() {
        return (
            <div className="Business">
  <div className="image-container">
    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
  </div>
  <h2>{business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state} {business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{business.category}</h3>
      <h3 className="rating">{business.rating}</h3>
      <p>{business.reviewCount}</p>
    </div>
  </div>
</div>
        )
    }
}

export default Business;