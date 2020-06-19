import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WarningMessage from '../WarningMessage';
import LikeCountButton from '../LikeCountButton';
import DeleteButton from '../deleteButton/DeleteButton';

// matui
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// 3rd party libs
import moment from 'moment';
// styles
import messagesStyles from './messages.styles';
// icons
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import UnlikeIcon from '@material-ui/icons/ThumbUpOutlined';
// redux
import { connect } from 'react-redux';
import { handleUpdateLikes } from '../../redux/actions/messagesActions';
import {
  sendWarningMessage,
  resetWarningMessage,
  setDeleteWarning,
  resetDeleteWarning,
} from '../../redux/actions/uiActions';

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likedMessage: '',//selected
      open: false,  //warning
      vertical: 'top',  // warning placement
      horizontal: 'right',  // warning placement
    };
  }

  handleDeleteWarning = () => {
    this.setState({
      open: true,
    });
    this.props.setDeleteWarning();
  }

  handleResetDeleteWarning = () => {
    this.props.resetDeleteWarning();
  }

  handleLiked = messageId => {
    const { likes, authenticated } = this.props;
    let likedBefore = {};
    this.setState({open: true});
    if (!!authenticated) {
      if (!!likes && likes.length === 0) {
        return  this.props.handleUpdateLikes(messageId);
      }
      else if (!!likes && likes.length > 0) {
        likedBefore = likes.find(m => m.messageId === messageId);
        if (!likedBefore) {//not liked yet
          return this.props.handleUpdateLikes(messageId);
        }// otherwise
        else return this.props.sendWarningMessage();
      }
    }
    this.props.sendWarningMessage();
  }

  handleResetliked = () => {
    this.setState({open: false});
    this.props.resetWarningMessage();
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
      deleteMessageWarning,
      warning,
      user,
    } = this.props;

    return (
      <Card className={classes.card} key={messageId} elevation={2}>
        <CardMedia
          className={classes.image}
          image={imageUrl}
          loading="auto"
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
          
          <div className={classes.messageInnerWrapper}>
            {message}
             

            <IconButton
              onClick={() => this.handleLiked(messageId)}
              className={classes.likeButtonWrapper}
            >
              {likeCount > 0 ? (
                <LikeIcon
                  className={classes.likeButton}
                  color={'secondary'}
                />
              ) : <UnlikeIcon 
                    className={classes.unlikeButton}
                    color='secondary'
                  />
              }

              <LikeCountButton 
                likeCount={likeCount} 
                color={'primary'} 
              />
            </IconButton>

          {!!authenticated &&
            <DeleteButton 
              messageId={messageId}
              userMessage={user}
              handleDeleteWarning={this.handleDeleteWarning}
            />
          }
          </div>

          <Typography variant='body2' color={'textSecondary'}>
            {moment(createdAt).fromNow()}
          </Typography>
        </CardContent>
          { !!warning && !deleteMessageWarning &&
          <WarningMessage
            warning={warning}
            open={open}
            authenticated={authenticated}
            handleLiked={this.handleLiked}
            handleResetliked={this.handleResetliked}
            horizontal={horizontal}
            vertical={vertical}
          />
          }
          { !!deleteMessageWarning && !warning &&
          <WarningMessage
            open={open}
            deleteMessageWarning={deleteMessageWarning}
            authenticated={authenticated}
            handleDeleteWarning={this.handleDeleteWarning}
            handleResetDeleteWarning={this.handleResetDeleteWarning}
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
  deleteMessageWarning: state.ui.deleteMessageWarning,
});

const mapActionsToProps = {
  sendWarningMessage,
  resetWarningMessage,
  handleUpdateLikes,
  setDeleteWarning,
  resetDeleteWarning,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(messagesStyles)(Messages));


