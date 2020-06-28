export default {
  loginForm: {
    textAlign: 'center',
    position: 'relative',
  },
  'innerForm': {
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem',
    marginBottom: '6rem',
    minHeight: '482px',
  },
  loginTitle: {
    fontWeight: 400,
    margin: '10rem 0 5rem',
  },
  emailField: {
    margin: '2rem 0',
    height: '80px',
  },
  passwordField: {
    marginBottom: '2rem',
    height: '80px',
  },
  credentialsError: {
    color: '#F44336',
    marginTop: 0,
    width: '100%',
    height: '40px',
    textAlign: 'center',
    lineHeight: 2.5,
  },
  noAccount: {
    '& button': {
      marginLeft: '5px',
      textDecoration: 'underline',
    }
  },
  errorsHereLink: {
    color: '#515151',
    margin: '0 5px',
    textDecoration: 'underline',
  },
  spinner: {
    position: 'absolute',
    top: '36vh',
    left: '47%',
  },
  loginButton: {
    marginTop: '3rem',
  },
};
