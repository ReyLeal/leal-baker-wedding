import React from 'react';
import { connect } from 'react-redux';
import {Grid, AppBar, Toolbar, Tabs, Tab} from '@material-ui/core';
import {changeTab} from '../Actions/Actions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  navBar: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navBackground: {
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  navigationTabs: {},
  tab: {},
}));

const handleChange = (value, dispatch) => {
    dispatch(changeTab(value));
  };

const renderAppBar = (tabIndex, dispatch, classes) =>
  <AppBar className={classes.navBackground} position="fixed">
    <Toolbar className={classes.navBar}>
      {renderTabs(tabIndex, dispatch, classes)}
    </Toolbar>
  </AppBar>;

const renderTabs = (tabIndex, dispatch, classes) =>
  <Tabs
   className={'navigationTabs'}
   indicatorColor={"#FFFFFF"}
   value={tabIndex}
   onChange={(event, value) => handleChange(value, dispatch)}
   >
    {renderTab('Am I Lagging?', classes)}
    {renderTab('Contact Us', classes)}
    {renderTab('Terms And Conditions', classes)}
  </Tabs>;

const renderTab = (item, classes) =>
  <Tab className={'tab'} label={item}/>;

let Navigation = ({tabIndex, dispatch}) => {
  const classes = useStyles();
  return (
    <Grid container align={'center'} justify={'center'}>
      {renderAppBar(tabIndex, dispatch, classes)}
    </Grid>
  );
};

Navigation = connect((state) => {
  return {
    tabIndex : state.tabs.tabIndex
  }
})(Navigation);

export default Navigation
