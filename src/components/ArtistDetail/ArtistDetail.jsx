import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetail = ({ artistName, artistDetail }) => {
  const artistReleases = artistDetail.map((release) => (
    <div key={release.id}> 
      <img src={release.cover_art} />
      <h3>{release.title}</h3>
    </div>
  ));

  return (
    <>
      <h3>Releases for: {artistName} </h3>
      {artistReleases}
    </>
    
  );
};

ArtistDetail.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistDetail: PropTypes.array.isRequired
};

export default ArtistDetail;
