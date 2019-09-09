import React from 'react';
import {connect} from 'react-redux';
import {Grid, FormGroup, TextField} from 'material-ui';

class RSVPForm extends React.Component {
    state = {
        'First Name': '',
        'Last Name': '',
        'Contact Number': '',
        'Additional Guests': '',
        'Message': '',

    }

    field = (name) =>
        <TextField
            label={name}
            value={this.state[name]}
            InputLabelProps={{
                style: {color: 'white'}
            }}
            onChange={({target: {value}}) => this.setState({ [name] : value })}
        />;

    render() {
        return (
            <Grid id={'RSVPContainer'}>
                <Grid item xs={8}>
                    <FormGroup>
                        {this.field('First Name')}
                        {this.field('Last Name')}
                        {this.field('Contact Number')}
                        {this.field('Additional Guests')}
                        {this.field('Message')}
                    </FormGroup>
                </Grid>
            </Grid>
        )
    }
}

RSVPForm = connect()(RSVPForm);

export default RSVPForm
