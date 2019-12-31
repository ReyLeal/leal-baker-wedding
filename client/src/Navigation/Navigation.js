import React from 'react';
import { connect } from 'react-redux';
import {Grid, AppBar, Toolbar, Tabs, Tab} from '@material-ui/core';
import {changeTab} from '../Actions/Actions';


const handleChange = (value, dispatch) => {
    dispatch(changeTab(value));
  };

const renderAppBar = (tabIndex, dispatch) =>
  <AppBar className={"navBar navBackground"} style={{backgroundColor: 'rgba(0,0,0,0.20)'}} position="fixed">
    <Toolbar className={"navBar"}>
      {renderTabs(tabIndex, dispatch)}
    </Toolbar>
  </AppBar>;

const renderTabs = (tabIndex, dispatch) =>
  <Tabs
   className={'navigationTabs'}
   indicatorColor={"#FFFFFF"}
   value={tabIndex}
   onChange={(event, value) => handleChange(value, dispatch)}
   >
    {renderTab('Home')}
    {renderTab('Our Story')}
    {renderTab('The Deets')}
    {renderTab('RSVP')}
  </Tabs>;

const renderTab = item =>
  <Tab className={'tab'} label={item}/>;

let Navigation = ({tabIndex, dispatch}) => (
  <Grid container align={'center'} justify={'center'}>
    {renderAppBar(tabIndex, dispatch)}
  </Grid>
)

Navigation = connect((state) => {
  return {
    tabIndex : state.tabs.tabIndex
  }
})(Navigation)

export default Navigation
