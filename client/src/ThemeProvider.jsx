import React from 'react';
import { createMuiTheme, Grid, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: '#fff',
      secondary: 'rgba(9,9,9,0.54)',
    },
    MuiSelect: {
      icon: {
        color: 'white',
      }
    },
    MuiFormHelperText: {
      root: {
        color: 'white',
      }
    },
    MuiInput: {
      root: {
        color: 'white'
      },
      input: {
        color: 'white'
      },
      underline: {
        '&:before': { //underline color when textfield is inactive
          borderBottomColor: 'white!important',
        },
        '&:hover:not($disabled):before': { //underline color when hovered
          borderBottomColor: 'white!important',
        },
        '&:after': { //underline color when textfield is inactive
          borderBottomColor: 'gray!important',
        },
      },
    },
    MuiButton: {
      root: {
        '&$disabled': {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
  }
});

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid style={{ overflow: 'hidden' }} container align={'center'} justify={'center'}>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}
