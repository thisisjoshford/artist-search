import React, { useState, useEffect } from 'react';
import ArtistResults from '../../components/ArtistResults/ArtistResults';
import { useParams } from 'react-router-dom';
import { getArtists } from '../../services/apiFetches';

const ResultsList = () => {

  const [artistResults, setArtistResults] = useState([]);

  const artistSearch = useParams();
  
  useEffect(() => {
    getArtists(artistSearch.artistName)
      .then(res => setArtistResults(res));
  }, []);

  return (
    <>
      <h1>{artistSearch.artistName} Results</h1>
      <ArtistResults results={artistResults}/>
    </>
  );
};

export default ResultsList;
