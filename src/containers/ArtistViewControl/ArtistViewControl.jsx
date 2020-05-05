import React, { useState, useEffect } from 'react';
import ArtistView from '../../components/ArtistResults/ArtistResults';
import { useParams } from 'react-router-dom';
import { getArtists } from '../../services/apiFetches';

const ArtistViewControl = () => {

  const [artistDetail, setArtistDetail] = useState([]);
  const artistID = useParams();

  useEffect(() => {
    getArtistDetail(artistID.id)
      .then(res => setArtistDetail(res));
  }, []);

  return (
    <>
      <h3>{artistDetail.artistName} </h3>
      <ArtistResults results={artistResults}/>
    </>
  );
};

export default ArtistViewControl;
