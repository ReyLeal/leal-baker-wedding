import React from 'react';
import { connect } from 'react-redux';
import {Grid, Button} from 'material-ui'

let LandingPage = () => (
  <Grid>
    <Button>
      Hello
    </Button>
  </Grid>
)

LandingPage = connect()(LandingPage)

export default LandingPage
