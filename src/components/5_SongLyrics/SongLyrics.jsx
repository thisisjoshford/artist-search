import React from 'react';
import PropTypes from 'prop-types';

const SongLyrics = ({ songName, songLyrics }) => (
  <>
    <h3>{songName}</h3>
    <p>{songLyrics} </p>
  </>
);

SongLyrics.propTypes = {
  songName: PropTypes.string.isRequired,
  songLyrics: PropTypes.array.isRequired
};

export default SongLyrics;
