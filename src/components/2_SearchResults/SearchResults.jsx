import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withList from '../withList';

const Artist = ({ name, info, id }) => (
  <>
    <Link to={`/${name}/${id}`} >
      <p>{name}</p>
    </Link>
    <p>Info: {info}</p>
  </>
);

const SearchResults = withList(Artist, 'results'); 

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default SearchResults;
