import React from 'react';
import './App.css';

import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: "Marc's Tacos",
  address: '123 StreetName',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '12345',
  category: 'Mexican',
  rating: 4.5,
  reviewCount: 101
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <>
      <div className="App">
        <SearchBar />
        <BusinessList businesses={businesses}/>
      </div>
    </>
  );
}

export default App;
