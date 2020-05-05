import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../../containers/Main';
import Albums from '../Albums/Albums';

export default function App() {
  return (
    <>
      <Main />
      <Router>
        <Switch>
          <Route exact path="/artist/:artistID" component={Albums} />
        </Switch>
      </Router>
    </>
  );

}
