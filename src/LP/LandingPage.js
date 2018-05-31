import React from 'react';
import {Grid} from 'material-ui'
import NextNavigation from './NextNavigation'
import LPCountDown from './LPCountDown'
import { TitleContainer } from './TitleContainer'

let LandingPage = () => (
    <Grid id={'Home'}>
      <Grid className={'lpContainer'} container justify={'center'} direction={'row'} alignItems={'flex-end'}>
          <Grid className={'titleContainer'} container justify={'center'} direction={'row'} alignItems={'center'}>
              <TitleContainer />
          </Grid>
          <Grid className={'CDButtonContainer'} item xs={12}>
              <NextNavigation />
              <LPCountDown />
          </Grid>
      </Grid>
    </Grid>

);

export default LandingPage
