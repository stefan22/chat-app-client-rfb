import teal from '@material-ui/core/colors/teal';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    width: '100vw',
    minHeight: '170px',
    left: 0,
    right: 0,
    padding: '3rem 1rem 2rem 1rem',
    marginTop: '7rem',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
  },
  innerWrapper: {
    display: 'flex',
    width: '100%',
    margin: '0 2rem',
  },
  mobileInnerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  footerLinks: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end'
  },
  mobileFooterLinks: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    margin: '1rem 0',
    padding: '0 5px',
    justifyContent: 'center',
    '& > div': {
      maxWidth: 'inherit',
      flex: '0 1 33%',
      '& h2': {
        textAlign: 'center'
      },
      '& li': {
        textAlign: 'center'
      }
    },

  },
  list: {
    '& h2': {
      textAlign: 'right'
    },
    '& li': {
      textAlign: 'right'
    }
  }, 
 
  logo: {
    alignItems: 'center',
    padding: '1rem 0',
    '& a': {
      color: theme.palette.primary.contrastText
    }
  },    
  footerTitle: {
    color: teal[100],
  },
	footerHeading: {
    color: theme.palette.primary.contrastText,
    fontWeight:500,
    textAlign: 'center'
	},
  ul: {
    listStyleType: 'none',
    textAlign: 'center'
  },  
  footerLink: {
    color: teal[900],
  }
}));



