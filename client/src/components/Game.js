import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: '3em',
    display: 'flex',
    flexDirection: 'column'
  },
  buttons: {
    paddingTop: '2em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}));

const Game = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant='h3' color='inherit'>
        Create or join a game to start playing Spy!
      </Typography>
      <div className={classes.buttons}>
        <Button color='primary' variant='contained'>Create a game</Button>
        <Button color='secondary' variant='contained'>Join a game</Button>
      </div>
    </Paper>
  )
};

export default Game;