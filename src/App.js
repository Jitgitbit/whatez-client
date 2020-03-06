import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./components/HomePage";
import SignupPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";


const baseUrl = "http://localhost:5000";


export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />

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