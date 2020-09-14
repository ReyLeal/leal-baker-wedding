import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ServerSelect from './ServerSelect';
import TestResults from './TestResults';
import StartTestButton from './StartTestButton';

const useStyles = makeStyles(() => ({
  pageContainer: {
    marginTop: '6rem',
    color: 'white',
  },
  connectionCheckContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 8,
    padding: 20,
    textAlign: 'center',
    lineHeight: '2rem,'
  },
}));

const loopIntervals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

export default function ConnectionCheck() {
  const classes = useStyles();
  const [server, setServer] = useState('-1');
  const [currentSegment, setCurrentSegment] = useState([]);
  const [pastSegments, setPastSegment] = useState([]);
  const [testing, setTesting] = useState(false);
  const testPing = async () => {
    setTesting(true);
    if (currentSegment.length !== 0) {
      setPastSegment([...pastSegments, currentSegment]);
    }
    setCurrentSegment([]);
    let segments = [];
    let secondsTimeout = 0;
    loopIntervals.forEach((interval) => {
      secondsTimeout += 2000;
      setTimeout(async () => {
        const ping = await pingServer(segments, interval);
        if (interval > 1) {
          segments.push(ping);
        }
      }, secondsTimeout);
    });
    setTimeout(() => setTesting(false), secondsTimeout + 1000);
  };
  const pingServer = async (segments, interval) =>
  {
    const requestStart = Date.now();
    await axios.get(server)
      .catch(err => console.error(err));
    const ping = (Date.now() - requestStart);
    if (interval > 1) {
      updateStates(ping, segments);
    }
    return ping;
  };
  const updateStates = (ping, segments) => {
    const newSegment = [...segments, ping];
    setCurrentSegment(newSegment);
  };

  return (
    <Grid container alignItems="center" justify="center" className={classes.pageContainer}>
      <ServerSelect testing={testing} server={server} setServer={setServer} setCurrentSegment={setCurrentSegment} />
      <Grid item xs={12} md={7} className={classes.connectionCheckContainer}>
        {(server !== '-1') && (
          <TestResults
            currentSegment={currentSegment}
            pastSegments={pastSegments}
          />
        )}
        <StartTestButton testing={testing} testPing={testPing} server={server} />
      </Grid>
    </Grid>
  );
}
