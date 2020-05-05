import React from 'react';
import PropTypes from 'prop-types';
import withList from '../withList';

const Artist = ({ name }) => (
  <p>{name}</p>
);

const SearchResults = withList(Artist, 'results'); 

Artist.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchResults;
