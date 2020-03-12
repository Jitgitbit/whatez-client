import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";
import MainPageContainer from "./components/MainPage/MainPageContainer";
import PhotoUploader from "./components/PhotoUploader";
import ChartForAdditives from "./components/ChartForAdditives";

// const baseUrl = "http://localhost:5000";

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/photo" component={PhotoUploader}/>
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/main" component={MainPageContainer}/>
            <Route exact path="/chart" component={ChartForAdditives}/>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
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