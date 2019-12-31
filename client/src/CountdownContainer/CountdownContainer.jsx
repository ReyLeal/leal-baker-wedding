import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import LPCountDown from '../LP/LPCountDown';


let CountDown = () => (
    <Grid id={'CountdownContainer'}>
        <Grid className={'cdContainer2'} container justify={'center'} alignItems={'center'}>
            <Grid container justify={'center'} alignItems={'center'}>
                <Grid className={'cdTitle'} item xs={12}>
                    <h2 className={'cdHeading'}> Wait for it... </h2>
                </Grid>
            </Grid>
            <LPCountDown />
        </Grid>
    </Grid>

);

CountDown = connect()(CountDown);

export default CountDown
