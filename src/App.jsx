import './App.css'

import {
  Router as Router,
  Switch,
  Route,
} from "wouter";

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  
  // state = {
  //   country: 'in', // Default country
  // };

  // handleCountryChange = (newCountry) => {
  //   this.setState({ country: newCountry });
  // };

  render() {
    //const { country } = this.state; 
    return (
      <div>
        <Router>
        <Navbar/>
        {/* <Navbar onCountryChange={this.handleCountryChange}/> */}
        {/* <News pageSize={9} country= "in" category="general" />  "in" */  }
        <Switch>
          <Route exact path="/"><News key="general" pageSize={9} country= "in" category="general" /></Route>
          <Route exact path="/business"><News key="business" pageSize={9} country= "in" category="business" /></Route>
           <Route exact path="/entertainment"><News key="entertainment" pageSize={9} country= "in" category="entertainment" /></Route>
          <Route exact path="/health"><News key="health" pageSize={9} country= "in" category="health" /></Route>
          <Route exact path="/science"><News key="science" pageSize={9} country= "in" category="science" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={9} country= "in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={9} country= "in" category="technology" /></Route>
        </Switch>
        {/* <Route exact path="/:country">{params => <News pageSize={9} country={params.country} />}</Route> */}
        </Router>
      </div>

    )
  }
}
