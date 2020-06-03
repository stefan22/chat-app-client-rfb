import React, { Component } from 'react';
// comps
import UserProfile from '../components/UserProfile';
import Messages from '../components/Messages';
import WarningMessage from '../components/WarningMessage';
// matui
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
// redux
import { connect } from 'react-redux';
import { getMessages, handleUpdateLikes } from '../redux/actions/messagesActions';
import { setProfileImage } from '../redux/actions/usersActions';
import {
  sendWarningMessage,
  resetWarningMessage,
} from '../redux/actions/uiActions';
// styles
import styles from '../theme/home';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedMessageId: '',
      liked: false,
      open: false, //warning
      vertical: 'top', //warning placement
      horizontal: 'center', //warning placement
    };
  }

  componentDidMount() {
    this.props.getMessages();
  }

  handleWarningClick = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  handleLikedUnliked = (messageId) => {
    const { authenticated } = this.props;
    if (!!authenticated) {
      this.setState((prevState) => ({
        liked: !prevState.liked,
        likedMessageId: messageId,
      }));
      //msg like
      this.props.handleUpdateLikes(messageId);
    } else {
      this.handleWarningClick();
      this.props.sendWarningMessage();
    }
  };

  handleUserProfileImage = (evt) => {
    const image = evt.target.files[0];
    const formData = new FormData();
    formData.append('file', image, image.name);
    this.props.setProfileImage(formData);
  };

  render() {
    //console.log(this);
    const { likedMessageId, open, horizontal, vertical } = this.state;
    const {
      classes,
      authenticated,
      loading,
      messages,
      user,
      warning,
      //open,
    } = this.props;

    return (
      <Grid container>
        <Grid item sm={8} xs={12}>
          <WarningMessage
            warning={warning}
            handleWarningClick={this.handleWarningClick}
            open={open}
            horizontal={horizontal}
            vertical={vertical}
          />
          <div className={classes.homeCards}>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <Messages
                  key={msg.messageId}
                  messages={messages}
                  handleLikedUnliked={this.handleLikedUnliked}
                  likedMessageId={likedMessageId}
                  {...msg}
                />
              ))
            ) : (
              <CircularProgress
                color='primary'
                size={40}
                className={classes.homeSpinner1}
              />
            )}
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div className={classes.homeRight}>
            {!!authenticated && (
              <UserProfile
                protected={user.protected}
                authenticated={authenticated}
                loading={loading}
                handleUserProfileImage={this.handleUserProfileImage}
              />
            )}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user,
  likes: state.user.likes,
  warning: state.ui.warning,
  messages: state.messages,
  loading: state.ui.loading,
});

const mapActionsToProps = {
  getMessages,
  setProfileImage,
  sendWarningMessage,
  resetWarningMessage,
  handleUpdateLikes,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Home));
