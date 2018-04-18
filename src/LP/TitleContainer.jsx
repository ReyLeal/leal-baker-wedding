import React from 'react';
import { Grid } from 'material-ui'

export const TitleContainer = () =>
        <Grid className={'titleSection'}  item xs={3}>
            <Grid container justify={'center'} alignItems={'center'}>
                <Grid className={'titleHeader'} item xs={12}>
                    Rey & Alexis
                </Grid>
                <Grid item xs={12}>
                    3/14/2020
                </Grid>
            </Grid>
        </Grid>
