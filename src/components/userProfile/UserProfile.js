import React from 'react';
import EditUserProfile from './EditUserProfile';
// matui
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
// librs
import moment from 'moment';
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WebIcon from '@material-ui/icons/Web';
import profileDefault from '../../images/profileholder.png';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
// styles
import userProfile from './userProfile.styles.js';

const UserProfile = ({
  loading,
  authenticated,
  protected: { imageUrl, user, bio, location, website, createdAt },
  handleUserProfileImage,
}) => {

  const classes = userProfile();

  const handleSimulateUpload = () => {
    const input = document.getElementById('userProfileImage');
    input.click();
  }


  return (
    <div className={classes.userProfileWrapper}>
      {!imageUrl || !!loading ? (

         <CircularProgress
            color='primary'
            size={40}
            className={classes.profileSpinner}
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
                color="secondary"
                onClick={handleSimulateUpload}
              >
                <EditIcon />
              </IconButton>
              <Typography
                variant='body1'
                component="span"
                color="textPrimary"
              >
              Edit Picture
              </Typography>
            </div>
          </div>
          <div className={classes.profileDetails}>
            <Typography
              variant='h3'
              color={'primary'}
              className={classes.userHeading}
            >
              <AccountCircleIcon
                className={classes.userProfileIcon}
                color={'primary'}
              />{' '}
              {!!user ? user.charAt(0).toUpperCase()+user.slice(1) : 'username'}
            </Typography>
            <hr />

             <EditUserProfile />

            <Typography variant='body1' className={classes.userInfo}>
              {!!bio ? bio : `${user}'s feeling lucky today`}
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

export default UserProfile;
