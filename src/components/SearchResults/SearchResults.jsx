import React from 'react';
import PropTypes from 'prop-types';
import withList from '../withList';

const Artist = ({ name, disambiguation }) => (
  <>
    <p>{name}</p>
    <p>Info: {disambiguation}</p>
  </>
);

const SearchResults = withList(Artist, 'results'); 

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string.isRequired,
};

export default SearchResults;
