import React from 'react';
import './App.css';

import Business from './components/Business/Business';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <>
      <div className="App">
        <SearchBar />
        <BusinessList />
      </div>
    </>
  );
}

export default App;
