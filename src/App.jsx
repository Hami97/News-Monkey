import "./App.css";
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import { Router as Router, Switch, Route } from "wouter";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {
  // state = {
  //   country: 'in', // Default country
  // };

  // handleCountryChange = (newCountry) => {
  //   setState({ country: newCountry });
  // };
  const [progress, setProgress] = useState(0);

  const pageSize = 15;
  //apiKey = process.env.NEWSr_MONKEY_API; for create react app

  // for vite
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <div>
      <Router>
        <Navbar />
        {/* console.log(import.meta.env.local.VITE_NEWSMONKEY_API); */}
        <LoadingBar color="#2ecc71" height={3} progress={progress} />
        {/* <Navbar onCountryChange={handleCountryChange}/> */}
        {/* <News setProgress= {setProgress}  pageSize={pageSize} country= "in" category="general" />  "in" */}
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch>
        {/* <Route exact path="/:country">{params => <News setProgress= {setProgress}  pageSize={pageSize} country={params.country} />}</Route> */}
      </Router>
    </div>
  );
};
export default App;
