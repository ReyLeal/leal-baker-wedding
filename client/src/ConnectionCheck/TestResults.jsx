import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircleOutline } from '@material-ui/icons';
import PingChart from './PingChart';

const useStyles = makeStyles(() => ({
  dataContainer: {
    overflow: 'hidden'
  },
  currentDataContainer: {
    marginBottom: '3rem',
  },
  pastDataContainer: {
    maxHeight: '15rem',
    overflowY: 'auto',
  },
  pingContainer: {
    fontSize: 20,
    fontWeight: 600,
    color: '#39ff14',
  },
  progress: {
    color: '#39ff14',
  },
  check: {
    color: '#39ff14',
    fontSize: 48,
  },
  pingDescription: {
    fontSize: 14,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.5)',
    marginRight: 12,
  },
  minMaxPingContainer: {
    marginTop: 6,
  },
  minMaxPing: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6,
    color: 'rgba(255,255,255,0.5)',
  },
  chartContainer: {
    borderRadius: 6,
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 100,
    width: 300,
  },
}));

export default function TestResults({ currentSegment, pastSegments }) {
  const classes = useStyles();
  const formatPingForChart = (segment) => (segment.map((ping, index) => ({ ping, index })));
  const calculateAveragePing = (segment) => Math.round((segment.reduce((a, b) => (a + b)) / segment.length));
  const progress = (segment) => Math.round((segment.length / 29) * 100);
  const getMinPing = (segment) => [...segment].sort()[0];
  const getMaxPing = (segment) => [...segment].sort().reverse()[0];
  const getTypicalPing = (segment) => {
    const calculateSegment = [...segment];
    calculateSegment.sort().pop();
    calculateSegment.sort().reverse().pop();
    if (calculateSegment.length < 1) {
      return 0;
    }
    return calculateAveragePing(calculateSegment);
  };
  const renderSection = (segment) => (
    <Grid container alignItems="center" justify="center" className={classes.currentDataContainer}>
      <Grid item xs={6} md={2} alignItems="center" justify="center" className={classes.pingContainer}>
        {(progress(segment) < 100) ?
          (
            <CircularProgress
              variant="static"
              className={classes.progress}
              value={progress(segment)}
            />
          ) : (
            <CheckCircleOutline className={classes.check}/>
          )
        }
      </Grid>
      <Grid item xs={6} md={5} alignItems="center" justify="center" className={classes.pingContainer}>
        <Grid container justify="center" alignItems="center">
          <span className={classes.pingDescription}>Average Ping -</span>
          {' '}
          [{calculateAveragePing(segment)}ms]
        </Grid>
        <Grid container justify="center" alignItems="center" className={classes.minMaxPingContainer}>
          <Grid item xs={12} className={classes.minMaxPing} >Max. Ping - {getMaxPing(segment)}ms</Grid>
          <Grid item xs={12} className={classes.minMaxPing} >Min. Ping - {getMinPing(segment)}ms</Grid>
          {!!getTypicalPing(segment) && (
            <Grid item xs={12} className={classes.minMaxPing} >Typical Ping - {getTypicalPing(segment)}ms</Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} alignItems="center" justify="center">
        <div className={classes.chartContainer}>
          <PingChart data={formatPingForChart(segment)}/>
        </div>
      </Grid>
    </Grid>
  );
  return (
    <Grid container alignItems="flex-start" justify="center" className={classes.dataContainer}>
      {currentSegment.length > 0 && (renderSection(currentSegment))}
      <Grid container alignItems="center" justify="center" className={classes.pastDataContainer}>
        {[...pastSegments].reverse().map((segment) => (renderSection(segment)))}
      </Grid>
    </Grid>
  )
}
