import React, { Component } from 'react';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
// redux
import { connect } from 'react-redux';
import { getUserProfileNMessages  } from '../../redux/actions/usersActions';
// styles
import userStyles from './user.styles';



class User extends Component {

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.props.getUserProfileNMessages(this.props.match.params.user);
  }
  



  render() {
    console.log(this);
    const { user } = this.props.match.params;
    let pageTitle = user.charAt(0).toUpperCase() + user.slice(1);
    const {
      classes,
    } = this.props;
  

    return (
      <Grid container>
        <Grid item sm={12} xs={12}>
          <div className={classes.userWrapper}>
            <header className={classes.userHeader}>
              <Typography 
                className={classes.userTitle}
                variant='h2' color='primary' align='center'>
                {pageTitle}
              </Typography>
            </header>
          </div>
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
  getUserProfileNMessages
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(userStyles)(User));
