import React from 'react';
// mui
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import WarningMessage from '../WarningMessage';
import LikeCountButton from '../LikeCountButton';
import DeleteButton from '../deleteButton/DeleteButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// 3rd party libs
import moment from 'moment';
// styles
import messageStyles from './message.styles';
// icons
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import UnlikeIcon from '@material-ui/icons/ThumbUpOutlined';




const Message = ({ 
	loading,
	imageUrl,
	messageId,
	message,
	likeCount,
	createdAt,
	authenticated,
	deleteMessageWarning,
	warning,
	user,
	horizontal,
	vertical,
	open,
	handleLiked,
	handleDeleteWarning,
  handleResetWarning,

}) => {
  
	const classes = messageStyles();


  return (
    <Card className={classes.card} key={messageId} elevation={2}>
       
        <CardMedia
          className={(!authenticated) ? classes.image : classes.imageAuth}
          image={imageUrl}
          loading="auto"
          title='User profile'
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.heading}
            component={Link}
            to={`/users/${user}`}
            variant='h4'
            color={'primary'}
          >
            {user}
          </Typography>
          
          <div className={classes.messageInnerWrapper}>
            {message}
             

            <IconButton
              onClick={() => handleLiked(messageId)}
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
              handleDeleteWarning={handleDeleteWarning}
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
            handleLiked={handleLiked}
            handleResetWarning={handleResetWarning}
            horizontal={horizontal}
            vertical={vertical}
          />
          }
          { !!deleteMessageWarning && !warning &&
          <WarningMessage
            open={open}

            deleteMessageWarning={deleteMessageWarning}
            authenticated={authenticated}
            handleDeleteWarning={handleDeleteWarning}
            handleResetWarning={handleResetWarning}
            horizontal={horizontal}
            vertical={vertical}
          />
          }
      </Card>
  );
};


export default Message;
