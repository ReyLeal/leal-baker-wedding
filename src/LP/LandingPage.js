import React from 'react';
import { connect } from 'react-redux';
import {Grid} from 'material-ui'
import {NextNavigation} from './NextNavigation'
import LPCountDown from './LPCountDown'
import { TitleContainer } from './TitleContainer'

let LandingPage = () => (
    <Grid>
      <Grid className={'lpContainer'} container justify={'center'} direction={'row'} alignItems={'flex-end'}>
          <Grid className={'titleContainer'} container justify={'flex-start'} direction={'row'} alignItems={'center'}>
              <TitleContainer />
          </Grid>
          <Grid className={'CDButtonContainer'} item xs={12}>
              <NextNavigation />
              <LPCountDown />
          </Grid>
      </Grid>
    </Grid>

);

LandingPage = connect()(LandingPage);

export default LandingPage
