import React from 'react';
import {Dialog, Button} from 'material-ui';
import DialogActions from "material-ui/es/Dialog/DialogActions";
import DialogTitle from "material-ui/Dialog/DialogTitle";
import DialogContent from "material-ui/es/Dialog/DialogContent";

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