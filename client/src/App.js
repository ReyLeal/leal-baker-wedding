import React from 'react'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import LandingPage from './LP/LandingPage';
import NextNavigation from './LP/NextNavigation'
import Navigation from './Navigation/Navigation';
import OurStory from './OurStory/OurStory';
import CountdownContainer from './CountdownContainer/CountdownContainer';
import Details from './Details/Details';
import RSVPContainer from './RSVP/RSVPContainer';
import {Grid} from '@material-ui/core';
import './css/app.css';
import {connect} from "react-redux";
import {handleScroll} from "./Helpers/handleScroll.jsx";

const theme = createMuiTheme({
    overrides: {
        palette: {
            primary: '#fff',
            secondary: 'rgba(9,9,9,0.54)',
        },
        MuiSelect: {
          icon: {
              color: 'white',
          }
        },
        MuiFormHelperText: {
            root: {
                color: 'white',
            }
        },
        MuiInput: {
            root: {
                color: 'white'
            },
            input: {
                color: 'white'
            },
            underline: {
                '&:before': { //underline color when textfield is inactive
                    borderBottomColor: 'white!important',
                },
                '&:hover:not($disabled):before': { //underline color when hovered
                    borderBottomColor: 'white!important',
                },
                '&:after': { //underline color when textfield is inactive
                    borderBottomColor: 'gray!important',
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