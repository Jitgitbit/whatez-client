
import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/layout/HomePage";
import SignUpPage from "./components/auth/SignUpPage";
import LogInPage from "./components/auth/LogInPage";
import PhotoUploader from "./components/PhotoUploader";
import ChartForAdditives from "./components/ChartForAdditives";
import AdditivesCategories from "./components/REST/AdditivesCategories";
import AdditivesCategory from "./components/REST/AdditivesCategory";
import NavBar from "./components/layout/NavBar";
import YoutubePlayer from "./components/player/YoutubePlayer";

// const baseUrl = "http://localhost:5000";

export class App extends Component {
  
  render() {
    return (
          <div className="App">
            <NavBar/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/login" component={LogInPage} />
              <Route exact path="/info/:additivesCategory_id" component={AdditivesCategory}/>
              <Route exact path="/info" component={AdditivesCategories}/>
              <Route exact path="/photo" component={PhotoUploader}/>
              <Route exact path="/chart" component={ChartForAdditives}/>
              <Route exact path="/player" component={YoutubePlayer}/>
            </Switch>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(App);