import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

const font = (text) => (<Typography variant='p' color='inherit'>{text}</Typography>);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '3em',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    display: 'flex',
  }
}));

const Credit = () => {
  return (
    <Fragment>
      <div>
        {font('Spy icon made by ')}
        <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">
          {font('itim2101')}
        </a>
        {font(' from ')}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {font('www.flaticon.com')}
        </a>
        {font(' is licensed by ')}
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
          {font('CC 3.0 BY')}
        </a>
      </div>
      <div>
        {font('Google icon made by ')}
        <a href="https://www.freepik.com/" title="Freepik">
          {font('itim2101')}
        </a>
        {font(' from ')}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {font('www.flaticon.com')}
        </a>
        {font(' is licensed by ')}
        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
          {font('CC 3.0 BY')}
        </a>
      </div>
    </Fragment>
  )
};

const Footer = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Credit/>
    </Paper>
  )
};

export default Footer;