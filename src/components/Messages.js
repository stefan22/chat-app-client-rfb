import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LikeCountButton from '../components/LikeCountButton';
import WarningMessage from '../components/WarningMessage';
// matui
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// 3rd party libs
import moment from 'moment';
// styles
import styles from '../theme/messages';
// icons
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import UnlikeIcon from '@material-ui/icons/ThumbUpOutlined';
// redux
import { connect } from 'react-redux';
import { handleUpdateLikes } from '../redux/actions/messagesActions';
import {
  sendWarningMessage,
  resetWarningMessage,
} from '../redux/actions/uiActions';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedMessage: '',
      open: false,  //warning
      vertical: 'top',  // warning placement
      horizontal: 'center',  // warning placement
    };
  }

 
  handleLikedUnliked = (messageId) => {
    const { authenticated } = this.props;
    if (!!authenticated) {
        this.setState(prevState => ({
          open: !prevState.open
        }));
        //likes req server err to return
      !this.state.open ? 
          this.props.handleUpdateLikes(messageId) :
          this.props.resetWarningMessage();
    } 
    else {//not authenticated
      //send/reset warning
      this.setState(prevState => ({
        open: !prevState.open
      }));
      !this.state.open ? this.props.sendWarningMessage() : 
        this.props.resetWarningMessage();
    }
    
  };

  getMessageWarning = () => {
    return this.props.messageId === this.state.likedMessage;
  }

  render() {
    //console.log(this);
  const { horizontal, vertical, open } = this.state;

    const {
      classes,
      imageUrl,
      messageId,
      message,
      likeCount,
      createdAt,
      authenticated,
      warning,
      user,
    } = this.props;


    return (
      <Card className={classes.card} key={messageId} elevation={2}>
        <CardMedia
          className={classes.image}
          image={imageUrl}
          title='User profile'
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.heading}
            component={Link}
            to={`/users/${user}`}
            variant='h5'
            color={'primary'}
          >
            {user}
          </Typography>
          <Typography variant='body1'>
            {message}

            <IconButton
              onClick={() => this.handleLikedUnliked(messageId)}
              className={classes.likeButtonWrapper}
            >
              {likeCount > 0 ? (
                <LikeIcon
                  className={classes.likeButton}
                  color={'secondary'}
                />
              ) : (
                <UnlikeIcon
                  className={classes.unlikeButton}
                  color='secondary'
                />
              )}

              <LikeCountButton 
                likeCount={likeCount} 
                color={'primary'} 
              />

            </IconButton>
          </Typography>
          <Typography variant='body2' color={'textSecondary'}>
            {moment(createdAt).fromNow()}
          </Typography>
        </CardContent>
          { !!warning &&
          <WarningMessage
            warning={warning}
            open={open}
            authenticated={authenticated}
            handleLikedUnliked={this.handleLikedUnliked}
            horizontal={horizontal}
            vertical={vertical}
          />
          }
      </Card>
      
    );
  }
}


const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  likes: state.user.likes,
  warning: state.ui.warning,
  messages: state.messages,
  loading: state.ui.loading,
});

const mapActionsToProps = {
  sendWarningMessage,
  resetWarningMessage,
  handleUpdateLikes,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Messages));


