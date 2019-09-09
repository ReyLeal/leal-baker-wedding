import React from 'react';
import {Grid, Button} from 'material-ui'
import arrow from '../media/downArrow.png';
import {connect} from 'react-redux';
import {changeTab} from '../Actions/Actions';

const handleClick = (dispatch) => {
    dispatch(changeTab(1));
};

let NextNavigation = ({dispatch}) =>
    <Grid  className={'CDButtonContainer'} item xs={12}>
        <Button className={'arrowButton'} onClick={() => handleClick(dispatch)}>
            <img style={{height: '5rem', width: '5rem'}} src={arrow} alt=''/>
        </Button>
    </Grid>;


NextNavigation = connect((state) => {
    return {
        tabIndex: state.tabs.tabIndex
    }
})(NextNavigation);

export default NextNavigation;