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
  },
  // root: {
  //   margin: 'auto',
  //   borderRadius: '16px',
  //   transition: '0.3s',
  //   boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
  //   position: 'relative',
  //   maxWidth: 500,
  //   marginLeft: 'auto',
  //   overflow: 'initial',
  //   background: '#ffffff',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   paddingBottom: '2rem',
   
  // },
  // media: {
  //   width: '88%',
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   marginTop: '3rem',
  //   height: 0,
  //   paddingBottom: '48%',
  //   borderRadius: '2rem',
  //   backgroundColor: '#fff',
  //   position: 'relative',
   
  //   '&:after': {
  //     content: '" "',
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //     backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
  //     borderRadius: '16px',
  //     opacity: 0.5,
  //   },
  // },
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
  actionMessage: {
    display: 'inline',
    width: '50%'
  }
};
