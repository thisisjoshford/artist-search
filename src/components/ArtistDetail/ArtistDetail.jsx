import React from 'react';
import PropTypes from 'prop-types';
import withList from '../withList';

const ArtistCard = ({ name }) => (
  <p>{name}</p>
);

const ArtistDetail = withList(ArtistCard, 'artistDetail'); 

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ArtistDetail;
