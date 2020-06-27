import theme from '../../theme/customTheme';





export default {
  
  userWrapper: {
    margin: '0 1rem'
  },
  userHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    margin: '3rem 0',
  },
  userTitle: {
    fontWeight: 400,
    margin: '7rem 0 3rem',
  },

  messagesHeader: {
    padding: '0'
  },
  userName: {
    color: theme.palette.secondary.main,
  },
 
  content: {
    padding: 24,
  },
  userMessages: {
    margin: '3rem 0',
  },
  userRoot: {
    marginBottom: '2rem',
    padding: '1rem',
  },
  userMainMessage: {
    color: theme.palette.primary.mainText,
    fontWeight: 400,
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  userMessage: {
    color: theme.palette.primary.mainText,
    fontWeight: 400,
  },
  root: {
    margin: '2rem 0',
    marginBottom: '3rem',
    color: theme.palette.primary.mainText,
  },
   userProfileInfo: {
    margin: '3rem 0',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
  },
  userInfoWrapper: {
    padding: '2rem',
    border: '1px solid',
    borderColor: theme.borderPrimaryLight,
    borderRadius: '4px',
    backgroundColor: theme.palette.lightGreenBackground,
  },
  userProfileImage: {
    width: '100%',
    height: 'auto',
    margin: '1rem auto 1rem',
    maxWidth: '150px'
  },
  userLoginButton: {
    //backgroundColor: theme.palette.secondary.main,
  },
  userFabButton: {
    //backgroundColor: theme.palette.secondary.main,
  },
  userSubtitles: {
    color: theme.palette.primary.mainText,
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    alignItems: 'self-start',
  },
  userSubtitlesLight: {
    color: theme.palette.secondary.lightText,
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    alignItems: 'self-start',
  },
  userUserSpan: {
    color: theme.palette.primary.main,
    marginRight: '20px',
  },

  userUserSpanBio: {
    color: theme.palette.primary.main,
    marginRight: '10px',
  },

  userSubtitlesHeading: {
    color: theme.palette.secondary.main, 
    textAlign: 'left',
    width: '100%',
  },

 
  userTitle2: {
    color: theme.palette.primary.light,
  },
  
  actionMessage: {
    display: 'inline',
    width: '50%'
  },
  userMessageq: {
    color: theme.palette.secondary.light,
    marginRight: '5px',
  },

  userFootnote: {
    color: theme.palette.primary.mainText,
    margin: '1rem 0',
    fontSize: '1rem',
    '& a': {
      color: theme.palette.secondary.main,
    }
  },
  signupLink: {
   '& button': {
      verticalAlign: 'baseline',
      textDecoration: 'underline',
      letterSpacing: '.5px',
    }
  },
  userActions: {
    margin: '2rem 0 0'
  }


};
