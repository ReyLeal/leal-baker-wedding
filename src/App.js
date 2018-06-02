import React from 'react'
import LandingPage from './LP/LandingPage';
import Navigation from './Navigation/Navigation';
import OurStory from './OurStory/OurStory';
import CountdownContainer from './CountdownContainer/CountdownContainer';
import Details from './Details/Details';
import {Grid} from 'material-ui';
import './css/app.css';
import {connect} from "react-redux";
import {handleScroll} from "./Helpers/handleScroll.jsx";


let App = ({dispatch}) => {

    handleScroll(dispatch);

    return(
        <Grid style={{height: '400vh'}} container align={'center'} justify={'center'}>
            <Grid item xs={12}>
                <Navigation />
                <LandingPage />
                <OurStory />
                <CountdownContainer />
                <Details />
            </Grid>
        </Grid>
    )
};

App = connect()(App);

export default App;