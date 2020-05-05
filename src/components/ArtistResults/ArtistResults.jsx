import Artist from '../Artist/Artist';
import withList from '../withList';

const ArtistResults = withList(Artist, 'results'); 

export default ArtistResults;

// import React from 'react';
// import PropTypes from 'prop-types';

// export default function ArtistResults({ results }) {
//   console.log(results);

//   const listItems = results.map(item => (
//     <li key={item.id}>
//       <p>{item.name}</p>
//     </li>
//   ));

//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// ArtistResults.propTypes = {
//   results: PropTypes.array.isRequired,
// };
