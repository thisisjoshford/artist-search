import React from 'react';
import PropTypes from 'prop-types';

const SongLyrics = ({ artistName, songName, songLyrics }) => (
  <>
    <h3>Lyrics for {artistName} {songName}</h3>
    <p>{songLyrics} </p>
  </>
);

SongLyrics.propTypes = {
  artistName: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  songLyrics: PropTypes.array.isRequired
};

export default SongLyrics;
