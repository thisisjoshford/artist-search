import React from 'react';
import PropTypes from 'prop-types';
import withList from '../withList';

const Artist = ({ name, info }) => (
  <>
    <p>{name}</p>
    <p>Info: {info}</p>
  </>
);

const SearchResults = withList(Artist, 'results'); 

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default SearchResults;
