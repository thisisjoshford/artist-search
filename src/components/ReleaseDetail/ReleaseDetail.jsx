import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ReleaseDetail = ({ artistName, albumName, releaseDetail }) => {
  const trackList = releaseDetail.map((track) => (
    <Link key={track.id} to={`${artistName}/lyrics/${track.title}`}>
      <h3>{track.title}</h3>
    </Link>
  ));

  return (
    <>
      <h3>{albumName} Track List:</h3>
      {trackList}
    </>
    
  );
};

ReleaseDetail.propTypes = {
  artistName: PropTypes.string.isRequired,
  releaseDetail: PropTypes.array.isRequired
};

export default ReleaseDetail;
