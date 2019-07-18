import React, {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    "& button": {
      display: 'flex',
      marginTop: theme.spacing(2)
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formControl: {
    display: 'flex',
    margin: theme.spacing(1),
  },
}));

const Create = () => {
  const [gameName, setGameName] = useState('');
  const [hostName, setHostName] = useState('');

  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <Typography variant='h3' color='inherit'>Game Creation</Typography>
      <form className={classes.form}>
        <FormControl className={classes.formControl}>
          <InputLabel>Game name</InputLabel>
          <Input name="game name" value={gameName} onChange={e => setGameName(e.target.value)} type="text" required/>
          <FormHelperText>It's the name of the game</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Your name</InputLabel>
          <Input name="host name" value={hostName} onChange={e => setHostName(e.target.value)} type="text" required/>
          <FormHelperText>Your personal identifier</FormHelperText>
        </FormControl>
        <Button variant="contained" >Create Game</Button>
      </form>
    </Paper>
  )
};

export default Create;