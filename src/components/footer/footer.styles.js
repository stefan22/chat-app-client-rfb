import teal from '@material-ui/core/colors/teal';
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    width: '100vw',
    left: 0,
    right: 0,
    padding: '3rem 1rem 2rem 1rem',
    marginTop: '7rem',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.primary.main,
  },
  footerInnerWrapper: {
    display: 'flex',
    width: '100%',
    margin: '0 2rem'
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



