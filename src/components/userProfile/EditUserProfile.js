import React, { Component } from 'react';
// matui
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
// dialog
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// icons
import LaunchIcon from '@material-ui/icons/Launch';
// redux
import { connect } from 'react-redux';
import { userProfileUpdate } from '../redux/actions/usersActions';

// styles
import editUserStyles from './editUserStyles.js';

class EditUserProfile extends Component {
  state = {
    bio: '',
    location: '',
    website: '',
    open: false,
  };

  componentDidMount() {
    const { bio, location, website } = this.props.user.protected;
    this.setState({
      bio: bio ? bio : 'enter a brief intro',
      location: location ? location : 'enter your location',
      website: website ? website : 'enter website or blog if avail',
    });
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleProfileChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'text' || type === 'textarea') {
      this.setState({
        [name]: value,
      });
    }
  };

  handleCancel = () => {
    this.setState({
      open: false,
    });
  };

  handleSubmit = () => {
    const { bio, location, website } = this.state;
    const userProfile = {
      bio,
      location,
      website,
    };
    this.setState({ open: false });
    this.props.userProfileUpdate(userProfile);
  };

  render() {
    //console.log(this);
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <form>
        <div className={classes.userProfileIconWrap}>
          <LaunchIcon
            className={classes.editProfileIcon}
            onClick={this.handleOpen}
            color='primary'
          />
          <Typography variant='body1' component='span' color='textSecondary'>
            Edit user profile
          </Typography>
        </div>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle
            className={classes.editProfile}
            id='editProfile'
            align='center'
          >
            Edit User Profile
          </DialogTitle>
          <DialogContent className={classes.userProfileContent}>
            <DialogContentText align='center'>
              Make changes to your user profile here below.
            </DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='userStatement'
              name='bio'
              value={this.state.bio}
              label='enter a brief bio'
              type='textarea'
              onChange={this.handleProfileChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin='dense'
              name='location'
              value={this.state.location}
              id='userLocation'
              label='enter your Location'
              type='text'
              fullWidth
              onChange={this.handleProfileChange}
            />
            <TextField
              autoFocus
              margin='dense'
              name='website'
              value={this.state.website}
              id='userWebsite'
              label='enter website or blog if available'
              type='type'
              fullWidth
              onChange={this.handleProfileChange}
            />
          </DialogContent>
          <DialogActions className={classes.userProfileActions}>
            <Button onClick={this.handleCancel} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color='primary'>
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  authenticated: state.user,
});

const mapActionsToProps = {
  userProfileUpdate,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(editUserStyles)(EditUserProfile));
