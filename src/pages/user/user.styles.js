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
    margin: '3rem 0 5rem',
  },
  userTitle: {
    fontWeight: 400,
    margin: '10rem 0 5rem',
  },

  messagesHeader: {
    padding: '0'
  },
  userName: {
    color: theme.palette.primary.contrastText
  },
 
  content: {
    padding: 24,
  },
  userMessages: {
    marginBottom: '3rem',
  },
  userMessage: {
    color: theme.palette.primary.contrastText,
    fontWeight: 500,
  },
  root: {
    margin: '2rem 0',
    marginBottom: '3rem',
    backgroundColor: theme.palette.secondary.light
  },
  rootProfile: {
    margin: '3rem 0'
  },

  userImage: {
    maxWidth: '60px',
    height: 'auto',
    padding: '5px 0',
    marginTop: '2rem',
    marginLeft: '1rem',
    marginBottom: '1rem',
    borderRadius: '50%',
    boxShadow: `0px 1px 3px ${theme.palette.secondary.dark}`,
  },
  userCardMedia:{
    padding: '1rem 0',
    marginBottom: '3rem',
  },
  userSubtitle: {
    color: theme.palette.primary.light
  },
  userSubtitleProfile: {
    color: theme.palette.primary.light
  },
  actionMessage: {
    display: 'inline',
    width: '50%'
  },

  userFootnote: {
    margin: '1rem 0',
    fontSize: '1rem',
    '& a': {
      color: theme.palette.secondary.main,
    }
  }
};
