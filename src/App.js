import React from 'react'
import LandingPage from './LP/LandingPage';
import NextNavigation from './LP/NextNavigation'
import Navigation from './Navigation/Navigation';
import OurStory from './OurStory/OurStory';
import CountdownContainer from './CountdownContainer/CountdownContainer';
import Details from './Details/Details';
import RSVPContainer from './RSVP/RSVPContainer';
import {Grid} from 'material-ui';
import './css/app.css';
import {connect} from "react-redux";
import {handleScroll} from "./Helpers/handleScroll.jsx";


let App = ({dispatch}) => {

    handleScroll(dispatch);

    return(
        <Grid style={{overflow: 'hidden'}} container align={'center'} justify={'center'}>
            <Grid item xs={12}>
                <Navigation />
                <LandingPage />
                <NextNavigation />
                <OurStory />
                <CountdownContainer />
                <Details />
                <RSVPContainer />
            </Grid>
        </Grid>
    )
};

App = connect()(App);

export default App;