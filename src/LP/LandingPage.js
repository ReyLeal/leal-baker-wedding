import React from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from 'material-ui'
import {NextNavigation} from './NextNavigation'

let LandingPage = () => (
  <Grid className={'lpContainer'} container justify={'center'} align={'center'}>
    <NextNavigation />
  </Grid>
)

LandingPage = connect()(LandingPage)

export default LandingPage
