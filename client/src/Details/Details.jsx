import React from 'react';
import { connect } from 'react-redux';
import {Grid, Typography, Divider, Paper} from '@material-ui/core'

const linkToEstateWebsite = () => {
    window.open('http://www.thalattaestate.com/contact-location', '_blank');
};

const linkToAttireWebsite = () => {
    window.open('https://blog.guestboard.co/what-is-wedding-cocktail-attire/', '_blank');
};

const linkToRegistry = () => {
    window.open('https://www.target.com/gift-registry/giftgiver?registryId=9fea7c7efd174554a75b01cbe06ddecb&type=WEDDING', '_blank');
};

const linkToHoneymoon = () => {
    window.open('https://www.honeyfund.com/wedding/Alexis-Rey2020', '_blank');
};

const cardComponent = (title, type, text, onClick = () => {}) =>
    <Grid className={`cardContainer ${type}Container`} item xs={12} sm={3}>
        <Paper className={`cardPaper ${type}Paper`} onClick={onClick}>
            <Grid container alignItems={'center'} justyfy={'center'}>
                <Grid item xs={12} className={`cardMedia ${type}Media`}> </Grid>
                <Grid item xs={12} className={`cardTextContainer ${type}TextContainer`}>
                    <div className={`cardtext ${type}text`}>
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
            <Grid item xs={10} sm={10}>
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
                    { cardComponent('The Venue', 'locationCard', 'Learn more about the Thalatta Estate.' ,() => linkToEstateWebsite()) }
                    { cardComponent('What To Wear', 'wearCard', 'Click to get some insight on what to wear.', () => linkToAttireWebsite()) }
                    { cardComponent('Gift Registry', 'registryCard', 'Click here to view our Gift Registry.', () => linkToRegistry()) }
                    { cardComponent('Honeymoon Fund', 'honeymoonCard', 'Click here to donate to our honeymoon.', () => linkToHoneymoon()) }
                </Grid>
            </Grid>
        </Grid>
    </Grid>

);

Details = connect()(Details);

export default Details
