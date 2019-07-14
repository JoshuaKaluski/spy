import React from 'react';
import {ReactComponent as Logo} from '../svg/detective.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#595F72',
    "& a": {
      color: 'white',
      textDecoration: 'none',
    }
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
  },
  buttons: {
    flexGrow: 1,
  }
}));


const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link to='/'>
            <div className={classes.logo}>
              <Logo/>
              <Typography variant="h4" className={classes.title}>
                Spy
              </Typography>
            </div>
          </Link>
          <div>
            <Button className={classes.button} component={Link} to='/login' size="medium" color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Header;