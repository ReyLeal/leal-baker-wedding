import React from 'react'
import {connect} from "react-redux";
import Navigation from './Navigation/Navigation';
import './css/app.css';
import ThemeProvider from './ThemeProvider';
import ConnectionCheck from './ConnectionCheck/ConnectionCheck';

let App = () => {
  if ((!window.location.href.includes('localhost')) && (window.location.protocol !== "https:")) {
    window.location.protocol = "https";
  }
  return (
    <ThemeProvider>
      <Navigation/>
      <ConnectionCheck/>
    </ThemeProvider>
  )
};

App = connect()(App);

export default App;
