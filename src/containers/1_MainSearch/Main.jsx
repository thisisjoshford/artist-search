import React, { useState } from 'react';
import Search from '../../components/1_MainSearch/Search';
import { useHistory } from 'react-router-dom';

export default function Main() {

  const [artistName, setArtistName] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => setArtistName(target.value);

  //redirect on submit to get those sweet params to share with your grandma :)
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
