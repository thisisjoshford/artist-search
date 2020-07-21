import React, { useState, useEffect } from 'react';
import ArtistDetail from '../../components/3_ArtistDetail/ArtistDetail';
import { useParams } from 'react-router-dom';
import { getArtistDetail } from '../../services/apiFetches';

const ArtistViewControl = () => {

  const [artistDetail, setArtistDetail] = useState([]);
  const { artistName, artistID } = useParams();

  useEffect(() => {
    getArtistDetail(artistID)
      .then(res => setArtistDetail(res));
  }, []);

  return (
    <ArtistDetail 
      artistName={artistName} 
      artistDetail={artistDetail}
    />
  );
};

export default ArtistViewControl;
