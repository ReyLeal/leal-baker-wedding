import React from 'react';
import {connect} from 'react-redux';
import {Grid, FormGroup, TextField, Button, withStyles} from 'material-ui';
import axios from 'axios';
import ValidationDialog from "./ValidationDialog";

const styles = () => ({
  submitStyles: {
    marginTop: "2rem",
    padding: "8px",
    width: "8rem",
    border: "solid 1px white",
    background: "transparent",
    color: "white",
    borderRadius: "12px",
    fontWeight: "900",
  },
  textFieldStyle: {
    marginTop: '8px',
    width: '20rem',
    maxWidth: '90vw',
    color: 'white!important',
    '& < svg': {
      color: 'white!important'
    }
  },
});

const missingMembersText = (number) => number === 0 ?
  'How many guests are attending?'
  :
  `${number} Total Guest${number > 1 ? 's' : ''}`;

class RSVPForm extends React.Component {
  state = {
    rsvpCode: '',
    firstName: '',
    lastName: '',
    attending: true,
    guestCount: 0,
    message: '',
    validationMessage: '',
    validationTitle: '',
    submitting: false,
    maxGuests: 0,
  };

  isFormValid = () => {
    let message = '';

    [
      {stateName: 'rsvpCode', title: 'RSVP Code'},
      {stateName: 'firstName', title: 'First Name'},
      {stateName: 'lastName', title: 'Last Name'},
      {stateName: 'guestCount', title: 'Guest Count'}
    ].map(({stateName, title}) => {
      if (!this.state[stateName]) {
        message = message ? `${message}, ${title}` : `Please submit a valid value for: ${title}`
      }
      return true;
    });

    if (message) {
      this.setValidation('Error', message);
    }

    return !message;
  };

  enableSubmit = () => setTimeout(() => this.setState({submitting: false}), 10000);

  submit = () => {
    if (this.isFormValid() === false) {
      return false;
    }

    this.setState({submitting: true}, () =>
      axios.post(`http://localhost:3001/api/saveRSVP`, this.state)
        .then(({data: {success, message}}) => {
          if (success) {
            this.setValidation('Success', message || 'Your RSVP has been recorded.')
          } else {
            this.setValidation('Error', message || 'There was an error processing your request.')
          }
          this.enableSubmit()
        })
        .catch(error => {
          this.enableSubmit();
          console.error(error)
        })
    );
  };

  setValidation = (validationTitle = '', validationMessage = '') => this.setState({validationTitle, validationMessage});

  handleRSVPChange = (rsvpCode) =>
    this.setState({rsvpCode}, () => {
      axios.post(`http://localhost:3001/api/getGuestCount`, {rsvpCode})
        .then(({data: {success, maxGuests}}) => {
          if (success) this.setState({maxGuests});
        })
        .catch(error => console.error(error))
    });

  textField = (state, name) =>
    <TextField
      className={this.props.classes.textFieldStyle}
      label={name}
      value={this.state[state]}
      InputLabelProps={{
        style: {color: 'white'}
      }}
      onChange={({target: {value}}) => this.setState({[state]: value})}
    />;

  rsvpField = (state, name) =>
    <TextField
      className={this.props.classes.textFieldStyle}
      label={name}
      value={this.state[state]}
      InputLabelProps={{
        style: {color: 'white'}
      }}
      onChange={({target: {value}}) => this.handleRSVPChange(value)}
    />;

  attending = () =>
    <TextField
      className={this.props.classes.textFieldStyle}
      label={'Attending'}
      value={this.state.wholeParty}
      InputLabelProps={{
        style: {color: 'white'}
      }}
      select
      onChange={({target: {value}}) => this.setState({wholeParty: value})}
      SelectProps={{native: true}}
      margin="normal"
    >
      {[{value: true, label: "Yes! We'll be there"}, {value: false, label: "No. We can't make it :("}].map(item =>
        <option value={item.value} key={item.value}>{item.label}</option>)
      }
    </TextField>;

  guestCount = () =>
    <TextField
      className={this.props.classes.textFieldStyle}
      label={"Total Guests Attending"}
      value={this.state.guestCount}
      InputLabelProps={{
        style: {color: 'white'}
      }}
      select
      onChange={({target: {value}}) => this.setState({guestCount: value})}
      SelectProps={{native: true}}
      margin="normal"
    >
      {([...Array(this.state.maxGuests + 1).keys()]).map(number =>
        <option value={number} key={number}> {missingMembersText(number)} </option>
      )
      }
    </TextField>;

  messageArea = () =>
    <TextField
      className={this.props.classes.textFieldStyle}
      label={'Message'}
      value={this.state.message}
      multiline
      rowsMax={4}
      InputLabelProps={{
        style: {color: 'white'}
      }}
      onChange={({target: {value}}) => this.setState({message: value})}
    />;

  renderRSVP = () => !!this.state.maxGuests && (
    <React.Fragment>
      {this.textField('firstName', 'First Name')}
      {this.textField('lastName', 'Last Name')}
      {this.attending()}
      {!!this.state.attending && this.state.maxGuests > 1 && this.guestCount()}
      {!!this.state.attending && this.messageArea()}
    </React.Fragment>
  );

  renderSubmit = () => !!this.state.maxGuests && (
    <Button
      className={this.props.classes.submitStyles}
      onClick={() => this.submit(this.state)}
      disabled={this.state.submitting}
    >
      Submit RSVP
    </Button>
  );

  render() {
    const {validationTitle, validationMessage} = this.state;
    return (
      <Grid id={'RSVPContainer'}>
        <Grid item xs={8}>
          <FormGroup>
            {this.rsvpField('rsvpCode', 'RSVP Code')}
            {this.renderRSVP()}
          </FormGroup>
        </Grid>
        {this.renderSubmit()}
        <ValidationDialog title={validationTitle} message={validationMessage} close={() => this.setValidation()}/>
      </Grid>
    )
  }
}

RSVPForm = connect()(RSVPForm);

export default (withStyles(styles)(RSVPForm));