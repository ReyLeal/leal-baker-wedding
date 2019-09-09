import React from 'react'
import {createMuiTheme, MuiThemeProvider} from 'material-ui'
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

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            root: {
                color: 'white'
            },
            input: {
                color: 'white'
            },
            underline: {
                '&:before': { //underline color when textfield is inactive
                    backgroundColor: 'white',
                },
                '&:hover:not($disabled):before': { //underline color when hovered
                    backgroundColor: 'white',
                },
            },

        }
    }
});

let App = ({dispatch}) => {

    handleScroll(dispatch);

    return (
        <MuiThemeProvider theme={theme}>
            <Grid style={{overflow: 'hidden'}} container align={'center'} justify={'center'}>
                <Grid item xs={12}>
                    <Navigation/>
                    <LandingPage/>
                    <NextNavigation/>
                    <OurStory/>
                    <CountdownContainer/>
                    <Details/>
                    <RSVPContainer/>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    )
};

App = connect()(App);

export default App;