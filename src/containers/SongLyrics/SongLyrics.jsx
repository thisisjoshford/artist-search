import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getLyrics } from '../../services/apiFetches';

const SongLyricsControls = () => {

  const [songLyrics, setSongLyrics] = useState([]);
  const { artistName, songName } = useParams();

  useEffect(() => {
    getLyrics(artistName, songName)
      .then(res => setSongLyrics(res));
  }, []);

  console.log(songLyrics);

  return (
    <>
      <SongLyrics artistName={artistName} songLyrics={songLyrics}/>
    </>
  );
};

export default SongLyricsControls;
