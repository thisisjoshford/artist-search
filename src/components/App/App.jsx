import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../../containers/Main';
import SearchResults from '../../containers/SearchResultControls/SearchResultControls';
import ArtistDetail from '../../containers/ArtistDetailControls/ArtistDetailControls';
import ReleaseDetail from '../../containers/ReleaseDetailControls/ReleaseDetailControls';
import SongLyrics from '../../containers/SongLyrics/SongLyrics';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/:artistName" component={SearchResults} />
          <Route exact path="/:artistName/:artistID" component={ArtistDetail} />
          <Route exact path="/:artistName/:albumName/:releaseID" component={ReleaseDetail} />
          <Route exact path="/:artistName/lyrics/:songName" component={SongLyrics} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );

}
