import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../../containers/1_MainSearch/Main';
import SearchResults from '../../containers/2_SearchResultControls/SearchResultControls';
import ArtistDetail from '../../containers/3_ArtistDetailControls/ArtistDetailControls';
import ReleaseDetail from '../../containers/4_ReleaseDetailControls/ReleaseDetailControls';
import SongLyrics from '../../containers/5_SongLyricsControls/SongLyricsControls';

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
