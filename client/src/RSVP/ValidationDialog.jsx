import React from 'react';
import {Dialog, DialogActions, DialogTitle, DialogContent, Button} from '@material-ui/core';

export default function ValidationDialog(props) {
  return (
    <Dialog open={props.message && props.title}>
      <DialogTitle>
        {props.title}
      </DialogTitle>
      <DialogContent>
        {props.message}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.close}>Okay</Button>
      </DialogActions>
    </Dialog>
  )
}