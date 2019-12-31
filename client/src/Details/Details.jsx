import React from 'react';
import { connect } from 'react-redux';
import {Grid, Typography, Divider, Paper} from '@material-ui/core'

const cardComponent = (title, type, text) =>
    <Grid className={`${type}Container`} item xs={12} sm={4}>
        <Paper className={`${type}Paper`}>
            <Grid container alignItems={'center'} justyfy={'center'}>
                <Grid item xs={12} className={`${type}Media`}> </Grid>
                <Grid item xs={12} className={`${type}TextContainer`}>
                    <div className={`${type}text`}>
                        {title}
                    </div>
                    <div className={'containerBody'}>
                        {text}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </Grid>;

let Details = () => (
    <Grid id={'Details'}>
        <Grid className={'Details'} container justify={'center'} alignItems={'center'}>
            <Grid item xs={10} sm={8}>
                <Typography className={'containerTitle'} variant="display3" gutterBottom>
                    The Deets...
                </Typography>

                <Typography className={'containerCaption'} variant="subheading" gutterBottom>
                    ( The Nitty Gritty )
                </Typography>
                <Divider style={{marginBottom: '2rem', width: '50%'}} />
                <Typography className={'containerBody'} variant="title" gutterBottom>
                    Check out wedding details in these sections below. Oh, and don't forget to scroll down some more to RSVP!
                </Typography>
                <Grid style={{marginTop: '2rem'}} container justify={'center'} alignItems={'center'}>
                    { cardComponent('The Venue', 'locationCard', 'Learn more about the Thalatta Estate.') }
                    { cardComponent('What To Wear', 'locationCard', 'Click to get some insight on what to wear.') }
                    { cardComponent('Registry', 'locationCard', 'Click here to view our Registry.') }
                </Grid>
            </Grid>
        </Grid>
    </Grid>

);

Details = connect()(Details);

export default Details
