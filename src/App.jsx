import "./App.css";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Router as Router, Switch, Route } from "wouter";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export default class App extends Component {
  // state = {
  //   country: 'in', // Default country
  // };

  // handleCountryChange = (newCountry) => {
  //   this.setState({ country: newCountry });
  // };

  state = {
    progress: 0,
    height: 3,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  pageSize = 15;
  //apiKey = process.env.NEWSr_MONKEY_API; for create react app

  // for vite
  apiKey = import.meta.env.VITE_API_KEY;
  //apiKey = "8ed1458004ac478eb3f268d7a96c71e5";

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          {/* console.log(import.meta.env.local.VITE_NEWSMONKEY_API); */}
          <LoadingBar color="#2ecc71" progress={this.state.progress} />
          {/* <Navbar onCountryChange={this.handleCountryChange}/> */}
          {/* <News setProgress= {this.setProgress}  pageSize={this.pageSize} country= "in" category="general" />  "in" */}
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
          {/* <Route exact path="/:country">{params => <News setProgress= {this.setProgress}  pageSize={this.pageSize} country={params.country} />}</Route> */}
        </Router>
      </div>
    );
  }
}
