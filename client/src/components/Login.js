import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import LoginButtons from './LoginButtons';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2em'
  },
  buttons: {
    paddingTop: '2em'
  }
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Container>
          <Typography variant='h3' color='inherit'>Please login to an account to continue:</Typography>
          <div className={classes.buttons}>
            <LoginButtons/>
          </div>
        </Container>
      </Paper>
    </div>
  )
};

export default Login