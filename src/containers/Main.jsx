import React, { useState } from 'react';
import Search from '../components/Search/Search';
import { useHistory } from 'react-router-dom';

export default function Main() {

  const [artistName, setArtistName] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => setArtistName(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/${artistName}`);
  };

  return (
    <>
      <h1>Artist Search</h1>
      <Search onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
}
