import ArtistView from '../Artist/Artist';
import withList from '../withList';

const ArtistView = withList(Artist, 'results'); 

export default ArtistView;