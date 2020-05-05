import React, { useState, useEffect } from 'react';
import ArtistDetail from '../../components/ArtistDetail/ArtistDetail';
import { useParams } from 'react-router-dom';
import { getArtistDetail } from '../../services/apiFetches';

const ArtistViewControl = () => {

  const [artistDetail, setArtistDetail] = useState([]);
  const { artistID } = useParams();

  useEffect(() => {
    getArtistDetail(artistID)
      .then(res => setArtistDetail(res));
  }, []);

  return (
    <>
      <ArtistDetail results={artistDetail}/>
    </>
  );
};

export default ArtistViewControl;
