import React, { useState, useEffect } from 'react';
import ArtistResults from '../../components/SearchResults/SearchResults';
import { useParams } from 'react-router-dom';
import { getArtists } from '../../services/apiFetches';

const ResultsList = () => {

  const [artistResults, setArtistResults] = useState([]);
  const { artistName } = useParams();
  
  useEffect(() => {
    getArtists(artistName)
      .then(res => setArtistResults(res));
  }, []);

  return (
    <>
      <h3>Search Results for: {artistName} </h3>
      <ArtistResults results={artistResults}/>
    </>
  );
};

export default ResultsList;
