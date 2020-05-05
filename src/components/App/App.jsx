import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../../containers/Main';
import ResultsList from '../../containers/SearchResultControls/SearchResultControls';
import ArtistDetail from '../../containers/ArtistDetailControls/ArtistDetailControls';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/:artistName" component={ResultsList}/>
          <Route exact path="/:artistName/:artistID" component={ArtistDetail} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );

}
