import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


const ReleaseDetail = ({ artistName, ReleaseDetail }) => {
  // const artistReleases = ReleaseDetail.map((release) => (
  //   <h3>hi</h3>
  // ));

  return (
    <>
      <h3>Releases for: {artistName}</h3>
      {/* {artistReleases} */}
    </>
    
  );
};

ReleaseDetail.propTypes = {
  artistName: PropTypes.string.isRequired,
  ReleaseDetail: PropTypes.array.isRequired
};

export default ReleaseDetail;
