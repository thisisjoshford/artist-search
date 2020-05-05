import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../../containers/Main';
import ResultsList from '../../containers/ResultsListControls/ResultsListControls';
import ArtistResults from '../ArtistResults/ArtistResults';
import Albums from '../Albums/Albums';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/:artistName" component={ResultsList} />
          <Route exact path="/artist/:artistID" component={Albums} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </>
  );

}
