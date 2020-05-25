import React from 'react';
// matui
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// librs
import moment from 'moment';
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WebIcon from '@material-ui/icons/Web';
import profileDefault from '../images/profileholder.png';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// styles
import styles from '../theme/userProfile';

const UserProfile = ({
  classes,
  protected: { imageUrl, user, bio, location, website, createdAt },
  handleUserProfileImage,
}) => {

  const handleSimulateUpload = () => {
    const input = document.getElementById('userProfileImage');
    input.click();
  }

  return (
    <div className={classes.userProfileWrapper}>
      {!user ? (
        <CircularProgress
          color='primary'
          size={40}
          className={classes.spinner}
        />
      ) : (
        <Paper className={classes.userProfile} elevation={2}>
          <div className={classes.profileImage}>
            <img
              src={imageUrl ? imageUrl : profileDefault}
              className={classes.userImage}
              width={250}
              height={250}
              alt={`user profile ${user} `}
            />
            <div className="uploadImageWrap">
            <input 
              hidden="hidden" 
              type="file" 
              id="userProfileImage" 
              name="userProfileImage"
              onChange={(evt) => handleUserProfileImage(evt)} 
            />
              <IconButton
                color="primary"
                onClick={handleSimulateUpload}
              >
                <EditIcon />
              </IconButton>
              <Typography
                variant='body1'
                component="span"
                color="textSecondary"
              >
              Edit Picture
              </Typography>
          
            </div>
          </div>

          <div className={classes.profileDetails}>
            <Typography
              variant='h4'
              color={'secondary'}
              className={classes.userHeading}
            >
              <AccountCircleIcon
                className={classes.userProfileIcon}
                color={'secondary'}
              />{' '}
              {!!user ? user : 'username'}
            </Typography>
            <hr />
            <Typography variant='h5' className={classes.userInfo}>
              {!!bio ? bio : `${user} bio`}
            </Typography>
            <Typography variant='body1' className={classes.userInfo}>
              <LocationOnIcon
                color={'secondary'}
                className={classes.userProfileIconSecondary}
              />{' '}
              {!!location ? location : `${user} location`}
            </Typography>
            <Typography variant='body1' className={classes.userInfo}>
              <WebIcon
                color={'secondary'}
                className={classes.userProfileIconSecondary}
              />{' '}
              {!!website ? website : `${user} website`}
            </Typography>
            <Typography variant='body2' color="textSecondary" className={classes.userInfo}>
              Member since {moment(createdAt).format('dddd, MMMM Do YYYY')}
            </Typography>
          </div>
        </Paper>
      )}
    </div>
  );
};

export default withStyles(styles)(UserProfile);
