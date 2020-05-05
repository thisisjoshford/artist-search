import React from 'react';
import PropTypes from 'prop-types';

const ArtistDetail = ({ artistName, artistDetail }) => {
  
  
  return (
    <p>Details for: {artistName}</p>
  );
};

ArtistDetail.propTypes = {
  artistName: PropTypes.string.isRequired,
};

export default ArtistDetail;
