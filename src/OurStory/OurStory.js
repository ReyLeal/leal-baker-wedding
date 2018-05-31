import React from 'react';
import { connect } from 'react-redux';
import {Grid, Typography, Divider} from 'material-ui'

let OurStory = () => (
    <Grid id={'OurStory'}>
        <Grid className={'ourStory'} container justify={'center'} alignItems={'center'}>
            <Grid item xs={6}>
                <Typography className={'containerTitle'} variant="display3" gutterBottom>
                    Our Story
                </Typography>
                <Divider style={{marginBottom: '2rem', width: '50%'}} />
                <Typography className={'containerBody'} variant="title" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum neque ac sodales pulvinar.
                    Integer pharetra enim massa, eget vehicula leo luctus in. Nam sed faucibus arcu. Sed in enim urna.
                    Vestibulum eros ante, euismod porta ullamcorper nec, congue sit amet est. Etiam sit amet dolor eu quam suscipit auctor in vel elit.
                    Mauris tempor ornare quam sed ornare. Donec convallis malesuada diam mattis ornare.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Integer massa velit, pulvinar sed sagittis nec, sodales et diam.
                </Typography>
            </Grid>
        </Grid>
    </Grid>

);

OurStory = connect()(OurStory);

export default OurStory
