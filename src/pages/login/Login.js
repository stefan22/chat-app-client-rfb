import React, { Component } from 'react';
// comps
import { Link } from 'react-router-dom';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SubdirectoryArrowLeftRoundedIcon from '@material-ui/icons/SubdirectoryArrowLeftRounded';
// redux
import { connect } from 'react-redux';
import { userLogin, clearFormErrors } from '../../redux/actions/usersActions';
// styles
import styles from './login.styles';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.clearFormErrors();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userLogin = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.userLogin(userLogin, this.props.history);
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'email' || type === 'password') {
      this.setState({
        [name]: value,
      });
    }
  };

  render() {
    //console.log(this);
    const {
      classes,
  
      errors,
    } = this.props;
    const { email, password } = this.state;

    return (
      <Grid className={classes.loginForm} container>
        <Grid item sm={12} xs={12}>
          <Typography variant='h2' className={classes.loginTitle} color='primary' align='center'>
            Login
          </Typography>
          <form id='login' noValidate onSubmit={this.handleSubmit}>
            
            <div className={classes.innerForm}>
              <TextField
                id='email'
                className={classes.emailField}
                name='email'
                type='email'
                label='Email'
                value={email}
                helperText={errors.email}
                error={errors.email ? true : false}
                placeholder='Enter email'
                onChange={this.handleChange}
                autoComplete={'email'}
                fullWidth
              />
              <TextField
                id='password'
                className={classes.passwordField}
                name='password'
                type='password'
                label='Password'
                placeholder='Enter password'
                value={password}
                helperText={errors.password}
                error={errors.password ? true : false}
                onChange={this.handleChange}
                autoComplete={'password'}
                fullWidth
              />
              <Button
                type={'submit'}
                variant='contained'
                size='large'
                className={classes.loginButton}
                endIcon={<SubdirectoryArrowLeftRoundedIcon />}
                color='primary'
              >
                Login
              </Button>
            </div>
           

            {errors.credentials && (
              <Typography
                variant='body1'
                className={classes.credentialsError}
              >
              {errors.credentials}. Don't have an account? Click
               <Link to='/signup' className={classes.errorsHereLink}>
                here
               </Link>
              </Typography>
              )}
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.ui.loading,
  errors: state.ui.errors,
});

const mapActionsToProps = {
  userLogin,
  clearFormErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Login));
