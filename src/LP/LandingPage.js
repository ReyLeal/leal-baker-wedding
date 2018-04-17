import React from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from 'material-ui'
import {NextNavigation} from './NextNavigation'
import LPCountDown from './LPCountDown'

let LandingPage = () => (
    <Grid>
      <Grid className={'lpContainer'} container justify={'center'} direction={'row'} alignItems={'flex-end'}>
          <NextNavigation />
      </Grid>
      <Grid className={'CDContainer'} container justify={'center'} alignItems={'center'}>
          <LPCountDown />
      </Grid>
    </Grid>

);

LandingPage = connect()(LandingPage);

export default LandingPage
