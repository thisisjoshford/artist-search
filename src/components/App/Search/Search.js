import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ artistName, onChange, onSubmit }) => (
  
  <form onSubmit={onSubmit}>

    <label>

      <input type="text"
        name="artistSearch"
        placeholder="enter Artist Name"
        value={artistName}
        onChange={onChange}
      >
      </input>

    </label>

    <button>GO!</button>

  </form>

);

Search.propTypes = {
  artistName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Search;
