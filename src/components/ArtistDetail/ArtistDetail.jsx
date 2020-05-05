import React from 'react';
import withList from '../withList';

const ArtistCard = ({ name }) => (
  <>
    <p>{name} </p>
  </>
);

const ArtistDetail = withList(ArtistCard, 'results'); 

export default ArtistDetail;
