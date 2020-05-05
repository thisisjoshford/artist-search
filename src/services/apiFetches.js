export const getArtists = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25'`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      id: artist.id,
      name: artist.name
    })));
};

export const getArtistDetail = (artistID) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`)
    .then(res => res.json());
    // .then(json => json.artists.map(artist => ({
    //   id: artist.id,
    //   name: artist.name
    // })));
};


