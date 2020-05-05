import React from 'react';
import PropTypes from 'prop-types';
import withList from '../withList';

const Artist = ({ name }) => (
  <>
    <p>{name}</p>
  </>
);

const SearchResults = withList(Artist, 'results'); 

Artist.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchResults;

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
