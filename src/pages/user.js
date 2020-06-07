import React, { Component } from 'react';
// comps
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// redux
import { connect } from 'react-redux';
import {  } from '../redux/actions/usersActions';
// styles
import styles from '../theme/login';

/**
NOThing yet
----------------
 */

class Users extends Component {
  



  render() {
    //console.log(this);
    const {
      classes,
    } = this.props;
  

    return (
      <Grid className={classes.xxxxx} container>
        <Grid item sm={12} xs={12}>
          <Typography variant='h2' color='primary' align='center'>
            Page have not been started
          </Typography>
         
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui,
});

const mapActionsToProps = {
  
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Users));
