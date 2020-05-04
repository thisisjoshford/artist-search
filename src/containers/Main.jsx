import React, { useState } from 'react';
import Search from '../components/App/Search/Search';

export default function Main() {

  const [artistName, setArtistName] = useState('');
  
  const handleChange = ({ target }) => setArtistName(target.value);

  const handleSubmit = () => {
    console.log('artistName', artistName);

  };

 

  return (
    <>
      <h1>Artist Search</h1>
      <Search onSubmit={handleSubmit} onChange={handleChange} />
    </>
  
  );
}
