import React from 'react';
import { connect } from 'react-redux';
import {Grid, AppBar, Toolbar} from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import {changeTab} from '../Actions/Actions';


const handleChange = (value, dispatch) => {
    dispatch(changeTab(value));
  };

const renderAppBar = (tabIndex, dispatch) =>
  <AppBar className={"navBar navBackground"} position="fixed">
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
    {renderTab('About Us')}
    {renderTab('Location')}
    {renderTab('Registry')}
    {renderTab('RSVP')}
    {renderTab('Contact Us')}
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
