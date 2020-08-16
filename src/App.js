import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import EarthquakeList from './components/earthquakeList';
import Profile from './components/profile';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Feature from './components/feature';
import { data } from './data/data.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      headerData: data.site,
      profile: data.profile,
      featureData: data.data
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Header headerData={this.state.headerData} profile={this.state.profile} />
          </div>
            <Route exact path="/">
              <EarthquakeList featureData={this.state.featureData} />
            </Route>
            <Route path="/profile">
              <Profile profile={this.state.profile} />
            </Route>
            <Route path="/feature/:featureId" render={(props) =>
              <Feature featureId={props.match.params.featureId} featureData={this.state.featureData} />
            }>
            </Route>
        </div>
      </Router>
    );
  }
}

export default App;
