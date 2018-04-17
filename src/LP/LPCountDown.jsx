import React, {Component} from 'react';
import {Grid} from 'material-ui'
import moment from 'moment';

const WEDDING_DATE = '3/14/2020 00:00:00';


export default class CountDown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            years: '',
            months: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
        };

        this.date = moment(WEDDING_DATE, 'MM/DD/YYYY HH:mm:ss');
    }

    componentDidMount() {
        this.formatTime('years');
        this.formatTime('months');
        setInterval(() => {this.formatTime('days')}, 1000);
        setInterval(() => {this.formatTime('hours')}, 1000);
        setInterval(() => {this.formatTime('minutes')}, 1000);
        setInterval(() => {this.formatTime('seconds')}, 1000);
    }

    formatTime = (unit) => {
        let today = moment();
        let time = moment();
        switch(unit) {
            case 'years' :
                time = this.date.diff(today, 'years');
                break;
            case 'months' :
                time = time.endOf('year').diff(today, 'months') + 3;
                break;
            case 'days' :
                time = time.endOf('month').diff(today, 'days');
                break;
            case 'hours' :
                time = time.add(1, 'd').startOf('day').diff(today, 'hours');
                break;
            case 'minutes' :
                time = time.format('m') - 60;
                break;
            case 'seconds' :
                time = time.format('s') - 60;
                break;
            default:
                break;
        }
        this.setState({
            [unit] : Math.abs(time)
        });
    }

    countDownTime(unit) {
        return (
            <Grid className={'countDown'} item xs={2}>{this.state[unit]} {unit}</Grid>
        );
    }

    render = () => {
        return (
            <Grid className={'lpCountdown'} container justify={'center'} align={'center'}>
                <Grid container justify={'center'} align={'center'}>
                    {this.countDownTime('years')}
                    {this.countDownTime('months')}
                    {this.countDownTime('days')}
                    {this.countDownTime('hours')}
                    {this.countDownTime('minutes')}
                    {this.countDownTime('seconds')}
                </Grid>
            </Grid>
        )
    }
};

