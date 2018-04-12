import React from 'react'
import LandingPage from './LP/LandingPage';
import Navigation from './Navigation/Navigation';
import {Grid} from 'material-ui';
import './css/app.css';
 
export const App = () => (
  <Grid container align={'center'} justify={'center'}>
    <Grid item xs={12}>
      <Navigation />
      <LandingPage />
    </Grid>
  </Grid>
)
