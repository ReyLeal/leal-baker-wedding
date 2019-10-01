import React from 'react';
import {connect} from 'react-redux';
import {Grid, FormGroup, TextField} from 'material-ui';
import axios from 'axios';

class RSVPForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        wholeParty: '',
        message: '',
    };

    submit = (params) => {
      axios.post(`http://localhost:3001/api/saveRSVP`, params)
        .then((resp) => {
          console.log(resp);
        })
        .catch(error => console.error(error))
    };

    field = (state, name) =>
        <TextField
            label={name}
            value={this.state[state]}
            InputLabelProps={{
                style: {color: 'white'}
            }}
            onChange={({target: {value}}) => this.setState({ [state] : value })}
        />;

    render() {
        return (
            <Grid id={'RSVPContainer'}>
                <Grid item xs={8}>
                    <FormGroup>
                        {this.field('firstName', 'First Name')}
                        {this.field('lastName', 'Last Name')}
                        {this.field('wholeParty', 'Full Party')}
                        {this.field('message', 'Message')}
                    </FormGroup>
                </Grid>
              <button onClick={() => this.submit(this.state)}>Submit</button>
            </Grid>
        )
    }
}

RSVPForm = connect()(RSVPForm);

export default RSVPForm
