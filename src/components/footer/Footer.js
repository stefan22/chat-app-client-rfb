import React from 'react';
// mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
// styles
import useStyles from './useStyles.js';
// redux
import { connect } from 'react-redux';


const Footer = ({ messages, loading }) => {
  const classes = useStyles();

  return (
    <>
      {!loading ? (
        <footer className={classes.footer}>
          <Container>
            <Grid container>
              <div className={classes.footerInnerWrapper}>
                <Grid item xs={12} sm={3}>
                  <div className={classes.logo}>
                    <Link
                      className={classes.footerTitle}
                      variant='h3'
                      color='inherit'
                      href='/'
                    >
                      Chat-App
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3} className={classes.list}>
                  <Typography
                    className={classes.footerHeading}
                    component='h2'
                    gutterBottom
                  >
                    Pages
                  </Typography>
                  <ul className={classes.ul}>
                    <li>
                      <Link
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='/'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='/login'
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='/signup'
                      >
                        Signup
                      </Link>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={3} className={classes.list}>
                  <Typography
                    className={classes.footerHeading}
                    component='h2'
                    gutterBottom
                  >
                    Social
                  </Typography>
                  <ul className={classes.ul}>
                    <li>
                      <Link
                        target='_blank'
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='https://github.com'
                      >
                        Github
                      </Link>
                    </li>
                    <li>
                      <Link
                        target='_blank'
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='https://stackoverflow.com'
                      >
                        Stackoverflow
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.footerLink}
                        target='_blank'
                        color='inherit'
                        variant='body2'
                        href='https://twitter.com'
                      >
                        Twitter
                      </Link>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={3} className={classes.list}>
                  <Typography
                    className={classes.footerHeading}
                    component='h2'
                    gutterBottom
                  >
                    Company
                  </Typography>
                  <ul className={classes.ul}>
                    <li>
                      <Link
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='#aboutus'
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={classes.footerLink}
                        color='inherit'
                        variant='body2'
                        href='#contactus'
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </Grid>
              </div>
            </Grid>
          </Container>
        </footer>
      ) : (
        <CircularProgress
          color='primary'
          size={40}
          className={classes.spinner}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  messages: state.messages,
  loading: state.ui.loading,
});

export default connect(mapStateToProps)(Footer);
