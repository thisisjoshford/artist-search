import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getArtistDetail } from '../../services/apiFetches';

const Albums = () => {

  const [artistDetail, setArtistDetail] = useState([]);
  const { artistID } = useParams();

  useEffect(() => {
    getArtistDetail(artistID)
      .then(res => setArtistDetail(res));
  });
  console.log(artistDetail);

};

export default Albums;
