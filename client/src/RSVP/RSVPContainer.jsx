import React from 'react';
import { connect } from 'react-redux';
import {Grid, Typography, Divider} from 'material-ui';
import RSVPForm from './RSVPForm'

const whiteText = {color: 'white'};

let RSVPContainer = () => (
    <Grid id={'RSVP'} >
        <Grid className={'RSVP'} item xs={11} sm={8}>
            <Typography style={whiteText} className={'containerTitle RSVPTitle'}  variant="display3" gutterBottom>
                RSVP
            </Typography>
            <Typography className={'containerCaption'} style={whiteText} variant="subheading" gutterBottom>
                ( Please Fill Out The Form Below )
            </Typography>
            <Divider style={{marginBottom: '2rem', width: '50%', backgroundColor: 'white'}} />
            <RSVPForm/>
        </Grid>
    </Grid>

);

RSVPContainer = connect()(RSVPContainer);

export default RSVPContainer
