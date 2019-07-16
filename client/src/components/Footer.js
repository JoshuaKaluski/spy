import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '5em',
    flexDirection: 'column',
  },
  credits: {
    display: 'flex',
    width: '90%',
    height: '45%',
    padding: '0.5em',
    "& p a": {
      display: 'flex',
    }
  },
  text: {
    display: 'flex',
  }
}));



const Footer = () => {
  const classes = useStyles();

  const Credit = () => {
    return (
      <div>
        <Typography variant='body2' color='inherit'>
          <div className={classes.credits}>
            Spy icon made by&nbsp;
            <a href="https://www.flaticon.com/authors/itim2101" title="itim2101">
              itim2101
            </a>
            &nbsp;from&nbsp;
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com
            </a>
            is licensed by&nbsp;
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
              CC 3.0 BY
            </a>
          </div>
          <div className={classes.credits}>
            Google icon made by&nbsp;
            <a href="https://www.freepik.com/" title="Freepik">
              itim2101
            </a>
            &nbsp;from&nbsp;
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
            is licensed by&nbsp;
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">
              CC 3.0 BY
            </a>
          </div>
        </Typography>
      </div>
    )
  };

  return (
    <Paper className={classes.root}>
      <Credit/>
    </Paper>
  )
};

export default Footer;