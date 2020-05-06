import React, { useState, useEffect } from 'react';
import ReleaseDetail from '../../components/ReleaseDetail/ReleaseDetail';
import { useParams } from 'react-router-dom';
import { getReleaseInfo } from '../../services/apiFetches';

const ReleaseDetailControls = () => {
  const [releaseDetail, setReleaseDetail] = useState([]);
  const { artistName, albumName, releaseID } = useParams();

  useEffect(() => {
    getReleaseInfo(releaseID)
      .then(res => setReleaseDetail(res));
  }, []);

  return (
    <>
      <ReleaseDetail 
        artistName={artistName} 
        albumName={albumName} 
        releaseDetail={releaseDetail}/>
    </>
  );
};

export default ReleaseDetailControls;
