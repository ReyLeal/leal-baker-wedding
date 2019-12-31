import React from 'react';
import { connect } from 'react-redux';
import {Grid, Typography, Divider} from 'material-ui'

let OurStory = () => (
    <Grid id={'OurStory'}>
        <Grid className={'ourStory'} container justify={'center'} alignItems={'center'}>
            <Grid item xs={11} md={10}>
                <Typography className={'containerTitle'} variant="display3" gutterBottom>
                    Our Story
                </Typography>
                <Divider style={{marginBottom: '2rem', width: '50%'}} />
                <Typography className={'containerBody'} variant="title" gutterBottom>
                    We first met in high school as friends, and after a few years we started going on a few dates.
                    An ice skating date, a few concerts, a couple of trips to the ER, cheesy candle lit dinners,
                    and about 7 birthday later, we decided to seal the deal. We're looking forward
                    to our next sequence of rising action surrounded by our favorite folks this March!
                    If you're invited, that's great! If not, that's fine too...
                </Typography>
            </Grid>
        </Grid>
    </Grid>

);

OurStory = connect()(OurStory);

export default OurStory
