import React, { Component, createRef } from 'react';
// comps
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SubdirectoryArrowLeftRoundedIcon from '@material-ui/icons/SubdirectoryArrowLeftRounded';
// styles
import styles from './signup.styles';
// redux
import { connect } from 'react-redux';
import { userSignup, clearFormErrors } from '../../redux/actions/usersActions';
// gsap
import gsap from 'gsap';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signupTitleRef = createRef(null);
    this.state = {
      user: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentDidMount() {
    this.props.clearFormErrors();
    window.scrollTo(0,0);
    gsap.from(this.signupTitleRef.current, {
      opacity: 0.35,
      color: '#222222',
      duration: 2.5,
      rotationX: 360
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      user: this.state.user,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.userSignup(newUser, this.props.history);
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'email' || type === 'password' || type === 'text') {
      this.setState({
        [name]: value,
      });
    }
  };

  render() {
    //console.log(this);
    const { classes, errors, loading } = this.props;
    const { user, email, password, confirmPassword } = this.state;
    return (
      <Grid container>
        <Grid item sm={12} xs={12}>
          <Typography
            ref={this.signupTitleRef}
            variant='h2'
            className={classes.signupTitle}
            color='primary'
            align='center'
          >
            Signup
          </Typography>
          <form id='signup' noValidate onSubmit={this.handleSubmit}>
            <div className={classes.innerForm}>
              <TextField
                id='userSignup'
                className={classes.userField}
                name='user'
                type='text'
                label='User'
                value={user}
                helperText={errors.user}
                error={errors.user ? true : false}
                placeholder='Enter username'
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                id='emailSignup'
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
                id='passwordSignup'
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
              <TextField
                id='confirmPasswordSignup'
                className={classes.confirmPasswordField}
                name='confirmPassword'
                type='password'
                label='Confirm password'
                placeholder='Enter password again'
                value={confirmPassword}
                helperText={errors.confirmPassword}
                error={errors.confirmPassword ? true : false}
                onChange={this.handleChange}
                autoComplete={'confirm-password'}
                fullWidth
              />

              {!!loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}

              <Button
                type={'submit'}
                variant='contained'
                size='large'
                className={classes.signupButton}
                endIcon={<SubdirectoryArrowLeftRoundedIcon />}
                color='primary'
              >
                Signup
              </Button>
            </div>

            {errors.loginMsg && (
              <Typography variant='body1' className={classes.credentialsError}>
                {errors.loginMsg} Already have an account? Click
                <Link to='/login' className={classes.errorsHereLink}>
                  here
                </Link>
              </Typography>
            )}
            {errors.regMsg && (
              <Typography variant='body1' className={classes.credentialsError}>
                {errors.regMsg}
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
  errors: state.ui.errors,
  loading: state.ui.loading,
});

const mapActionsToProps = {
  userSignup,
  clearFormErrors,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Signup));
