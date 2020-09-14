import React from 'react';
import { Grid, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { servers } from './serverList';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 22,
    fontWeight: 600,
    color: '#39ff14',
    marginBottom: 20,
  },
  textFieldStyle: {
    width: '20rem',
    maxWidth: '90vw',
    color: 'white!important',
    '& < svg': {
      color: 'white!important',
      fill: 'white!important'
    }
  },
  serverSelectContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8,
    padding: 20,
    textAlign: 'center',
    lineHeight: '2rem,',
    marginBottom: '2rem',
  },
}));

export default function ServerSelect({ testing, server, setServer, setCurrentSegment }) {
  const classes = useStyles();
  const handleUpdate = (value) => {
    setServer(value);
    setCurrentSegment([]);
  };
  const selectServer = () =>
    <Select
      className={classes.textFieldStyle}
      label={'Select a Server'}
      value={server}
      InputLabelProps={{ style: {color: 'white'} }}
      select
      onChange={({target: {value}}) => handleUpdate(value)}
      multiple={false}
      autoWidth={false}
      disabled={testing}
      margin="normal"
    >
      {servers.map(item =>
        <option value={item.value} key={item.value}>{item.label}</option>)
      }
    </Select>;

  return (
    <Grid item xs={12} md={7} className={classes.serverSelectContainer}>
      <div className={classes.title}>Well? Are you lagging?</div>
      {selectServer()}
    </Grid>
  )
}
