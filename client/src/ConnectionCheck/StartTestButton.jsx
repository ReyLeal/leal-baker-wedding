import React  from 'react';
import { Button, CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  submitButton: {
    padding: "8px",
    width: "20rem",
    border: "solid 1px white",
    background: "transparent",
    color: "white",
    borderRadius: "12px",
    fontWeight: "900",
    margin: '2rem 0',
    transition: 'all ease-in-out 500ms',
    '&:hover': {
      backgroundColor: '#39ff14',
      color: 'black',
      borderColor: 'black',
    },
  },
  progress: {
    marginRight: '1rem',
    color: '#39ff14',
  },
}));

export default function StartTestButton({ testPing, testing, server }) {
  const classes = useStyles();
  const formatButtonText = () => {
    if (server === '-1') {
      return 'Select A Server';
    } else if (testing) {
      return 'Checking Ping...';
    }
    return 'Am I Lagging?';
  };
  const renderSubmit = () => (
    <Button
      className={classes.submitButton}
      onClick={testPing}
      disabled={testing || server === '-1'}
    >
      {testing && (
        <CircularProgress
          size={20}
          className={classes.progress}
        />
      )}
      {formatButtonText()}
    </Button>
  );
  return (
    <Grid container alignItems="center" justify="center">
      {renderSubmit()}
    </Grid>
  );
}
