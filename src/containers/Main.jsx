import React, { useState } from 'react';
import Search from '../components/App/Search/Search';
import { getArtists } from '../services/apiFetches';

export default function Main() {

  const [artistName, setArtistName] = useState('');
  const [artistResults, setArtistResults] = useState([]);

  const handleChange = ({ target }) => setArtistName(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getArtists(artistName)
      .then(artists => setArtistResults(artists));
  };
  console.log('Artist Name', artistName);
  console.log('Search Results', artistResults);


  return (
    <>
      <h1>Artist Search</h1>
      <Search onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
}
