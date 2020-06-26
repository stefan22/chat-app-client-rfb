import React, { Component, createRef } from 'react';
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
import loginStyles from './login.styles';
// gsap
import {gsap} from 'gsap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.loginTitleRef = createRef(null);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.clearFormErrors();
    gsap.from(this.loginTitleRef.current, {
      opacity: 0.35,
      color: '#222222',
      duration: 2.5, 
      rotationX: 360
    });
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
      <div className={classes.loginForm}>
        <Grid container>
          <Grid item sm={12} xs={12}>
            <Typography ref={this.loginTitleRef} variant='h2' className={classes.loginTitle} color='primary' align='center'>
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
            

              {errors.error && (
                <Typography
                  variant='body1'
                  className={classes.credentialsError}
                >
                Don't have an account? Click
                <Link to='/repositories/chatapp/signup' className={classes.errorsHereLink}>
                  here
                </Link>
                </Typography>
                )}
            </form>
          </Grid>
        </Grid>
      </div>
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
)(withStyles(loginStyles)(Login));
