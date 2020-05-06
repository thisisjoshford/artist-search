import React from 'react';
import PropTypes from 'prop-types';

const SongLyrics = ({ artistName, songName, songLyrics }) => (
  <section>
    <h3>Lyrics for {songName} by {artistName}</h3>
    <pre>{songLyrics.lyrics}</pre>
  </section>
);

SongLyrics.propTypes = {
  artistName: PropTypes.string.isRequired,
  songName: PropTypes.string.isRequired,
  songLyrics: PropTypes.array.isRequired
};

export default SongLyrics;
