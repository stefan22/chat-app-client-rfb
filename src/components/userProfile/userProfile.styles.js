import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  userProfileWrapper: {
    position: 'relative',
    minWidth: '300px',
    minHeight: '450px',
  },
  userImage: {
    padding: '1rem 0',
  },
  profileImage: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '250px',
    height: 'auto',
    minHeight: '250px',
  },
  userInfo: {
    textAlign: 'center',
    margin: '1.15rem 0',
  },
  userHeading: {
    textAlign: 'center',
    marginBottom: '1.75rem',
  },
  profileDetails: {
    padding: '1rem',
  },
  profileSpinner: {
    position: 'absolute',
    top: '15vh',
    right: '25%',
  },
  userProfileIcon: {
    width: '28px',
    height: 'auto',
    verticalAlign: 'middle',
  },
  userProfileIconSecondary: {
    width: '24px',
    height: 'auto',
    verticalAlign: 'top',
  },

}));
