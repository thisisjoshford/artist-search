import React, { useState, useEffect } from 'react';
// import withList from '../withList';
import { useParams } from 'react-router-dom';
import { getArtists } from '../../services/apiFetches';

const ResultsList = () => {

  const [artistResults, setArtistResults] = useState([]);
  const [artistName, setArtistName] = useState('');

  const artistSearch = useParams();

  useEffect(() => {
    getArtists(artistSearch.artistName)
      .then(res => setArtistResults(res));
  }, []);

console.log(artistName);
console.log('artistResults', artistResults);
  // withList(artistDetail, artistName);
 
  return (
    <>
      <h1>{artistSearch.artistName} Results</h1>
    </>
  );
};

export default ResultsList;
