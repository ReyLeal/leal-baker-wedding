import React, {Component} from 'react';
import {Grid} from '@material-ui/core'
import moment from 'moment';

const WEDDING_DATE = '03/14/2020 00:00:00';
const SINGULAR_TIME = {
    years : 'year',
    months : 'month',
    days : 'day',
    hours : 'hour',
    minutes : 'minute',
    seconds : 'second',
};


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

    formatPlurality = unit => {
        const isNumber = !Number.isNaN(this.state[unit]);
        const isOne = parseInt(this.state[unit], 10) === 1;

        return isNumber && isOne ? SINGULAR_TIME[unit] : unit;
    }

    formatTime = (unit) => {
        let today = moment();
        let time = moment();
        switch(unit) {
            case 'days' :
                time = moment(this.date).diff(today, 'days');
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
            <Grid className={'countDown'} item xs={4} sm={2}>
                <div className={'timeContainer'}>
                    <div className={'timeNumber'}>
                        {this.state[unit]}
                    </div>
                    <div className={'timeUnits'}>
                        {this.formatPlurality(unit)}
                    </div>
                </div>
            </Grid>
        );
    }

    render = () => {
        return (
            <Grid className={'lpCountdown'} container justify={'center'} align={'center'}>
                <Grid container justify={'center'} align={'center'}>
                    {this.countDownTime('days')}
                    {this.countDownTime('hours')}
                    {this.countDownTime('minutes')}
                    {this.countDownTime('seconds')}
                </Grid>
            </Grid>
        )
    }
};

