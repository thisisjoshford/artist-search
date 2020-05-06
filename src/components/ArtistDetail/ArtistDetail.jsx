import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ArtistDetail.css';


const ArtistDetail = ({ artistName, artistDetail }) => {
  const artistReleases = artistDetail.map((release) => (
    <Link 
      key={release.id} 
      to={`/${artistName}/${release.title}/${release.id}/`} 
    >
      <div key={release.id} className={styles.Artist}> 
        <img src={release.cover_art} />
        <h3>{release.title}</h3>
      </div>
      
    </Link>
  ));

  return (
    <>
      <h3>Releases for: {artistName}</h3>
      {artistReleases}
    </>
    
  );
};

ArtistDetail.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistDetail: PropTypes.array.isRequired
};

export default ArtistDetail;
