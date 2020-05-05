import placeholder from '../assets/placeholder.jpg';

export const getArtists = (artist) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25'`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      info: artist.disambiguation
    })));
};

export const getArtistDetail = (artistID) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistID}&fmt=json`)
    .then(res => res.json())
    .then(json => 
      json.releases.map(release => ({
        id: release.id,
        title: release.title,
        cover_art: release['cover-art-archive'].front 
          ? `http://coverartarchive.org/release/${release.id}/front` 
          : placeholder
      })));
};
