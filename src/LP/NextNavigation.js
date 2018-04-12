import React from 'react';
import {Grid, Button} from 'material-ui'
import arrow from '../media/downArrow.png';

export const NextNavigation = () =>
  <Button className={'arrowButton'}>
    <img style={{height: '5rem', width : '5rem'}} src={arrow} alt='' />
  </Button>
