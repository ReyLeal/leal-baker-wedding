import React from 'react';
import { connect } from 'react-redux';
import {Grid, FormGroup, TextField} from 'material-ui'

const whiteText = {color: 'white'};

let RSVPContainer = () => (
    <Grid id={'RSVPContainer'}>
        <Grid item xs={8}>

        </Grid>
    </Grid>

);

RSVPContainer = connect()(RSVPContainer);

export default RSVPContainer
