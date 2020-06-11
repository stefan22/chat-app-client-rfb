import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WarningMessage from './WarningMessage';
import LikeCountButton from './LikeCountButton';
import DeleteButton from './deleteButton/DeleteButton';

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
      likedMessage: '',//selected
      open: false,  //warning
      vertical: 'top',  // warning placement
      horizontal: 'right',  // warning placement
    };
  }

 
  handleLikedUnliked = (messageId) => {
    const { authenticated,likeCount } = this.props;
    if (!!authenticated) {
      if (likeCount === 0) {
        this.setState(prevState => ({
          open: false,
        }));
        this.props.handleUpdateLikes(messageId);
      }
      else if (likeCount > 0) {
        this.setState(prevState => ({
          open: !prevState.open,
        }));
        !this.state.open ? this.props.sendWarningMessage() :
          this.props.resetWarningMessage();
      }
    } 
    else {//not authenticated
      this.setState(prevState => ({
        open: !prevState.open,
      })); //send/reset warning
      !this.state.open ? this.props.sendWarningMessage() : 
        this.props.resetWarningMessage();
    }
  };


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
          
          <div className={classes.messageInnerWrapper}>
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
            />
          }
          </div>

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
  warning: state.ui.warning,
  messages: state.messages,
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


