import React from 'react';
import Business from './Business';

function BusinessList() {
  const businesses = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'Feargals Pizzeria',
        address: 'Pearse Street',
        city: 'Clonakilty',
        state: 'Cork',
        zipCode: 'P85 V300',
        category: 'Italian',
        rating: 5,
        reviewCount: 200
      },
    // Add more business objects here
  ];

  return (
    <div className="business-list">
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
