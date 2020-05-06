import React, { useState, useEffect } from 'react';
import SongLyrics from '../../components/5_SongLyrics/SongLyrics';
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
      <SongLyrics 
        artistName={artistName}
        songName={songName} 
        songLyrics={songLyrics}/>
    </>
  );
};

export default SongLyricsControls;
