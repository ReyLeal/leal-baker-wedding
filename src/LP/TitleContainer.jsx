import React from 'react';
import { Grid } from 'material-ui'

export const TitleContainer = () =>
        <Grid className={'titleSection'}  item xs={3}>
            <Grid container justify={'center'} alignItems={'center'}>
                <Grid className={'dateSection'} item xs={12}>
                    March 14th, 2020
                </Grid>
                <Grid className={'saveTheDate'} item xs={12}>
                    Save The Date
                </Grid>
                <Grid className={'titleHeader'} item xs={12}>
                    Rey & Alexis
                </Grid>
            </Grid>
        </Grid>
