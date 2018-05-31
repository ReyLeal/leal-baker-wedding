import React from 'react'
import LandingPage from './LP/LandingPage';
import Navigation from './Navigation/Navigation';
import OurStory from './OurStory/OurStory';
import {Grid} from 'material-ui';
import './css/app.css';
import {connect} from "react-redux";
import {handleScroll} from "./Helpers/handleScroll.jsx";


let App = ({dispatch}) => {

    handleScroll(dispatch);

    return(
        <Grid style={{height: '200vh'}} container align={'center'} justify={'center'}>
            <Grid item xs={12}>
                <Navigation />
                <LandingPage />
                <OurStory />
            </Grid>
        </Grid>
    )
};

App = connect()(App);

export default App;