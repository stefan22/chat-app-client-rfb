import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// matui
import withStyles from '@material-ui/core/styles/withStyles';  
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// 3rd party libs
import moment from 'moment';
// styles
import styles from  '../theme/messages';
// icons
import IconButton from '@material-ui/core/IconButton';
import LikeIcon from '@material-ui/icons/ThumbUp';
import UnlikeIcon from '@material-ui/icons/ThumbUpOutlined';



class Messages extends Component {
	state = {
		likes: [],
		messageId: 0,
		likedMessageId: 0,
	}
	componentDidMount() {
		const { messages } = this.props; 
		if (messages) {
			this.handleMessagesLikes(messages);
		}
	}

	// passLikes = () => {
	// 	const {likes} = this.props;
	// 	console.log('found likes => ', likes.length);
	// 	likes.forEach(itm => itm)
	// }

	// getLikedMessages = (likes) => {
	// 	let alks = [];
	// 	likes.map(itm => alks.push(itm.messageId));
	// 	//this.setState({likes: alks});
	// 	return alks;
	// }



	handleMessagesLikes = (mess) => {//debugger;
		let likes = JSON.parse(localStorage.getItem('likes'));
		console.log(likes);
		

	}



	
	render() {
		console.log(this);
		const { 
			classes, 
			imageUrl,
			messageId,
			likedMessageId,
			message,
			createdAt,
			user,
			handleLikedUnliked,
	} = this.props;




		return (
			<Card className={classes.card} key={messageId}>
				<CardMedia 
					className={classes.image}
					image={imageUrl}
					title="User profile" />
				<CardContent 
					className={classes.content}>
					<Typography
						className={classes.heading}
						component={Link} to={`/users/${user}`} 
						variant="h5"
						color={"primary"}
					>
						{user}
					</Typography>
					<Typography 
						variant="body1"
					>
						{message}  

					<IconButton
						onClick={() => handleLikedUnliked(messageId)}
						className={classes.likeButtonWrapper}
					>
					{likedMessageId === messageId ? (
						<LikeIcon
							name="like"
							className={classes.likeButton}
							color={"secondary"}
						/>
					) :  (
						<UnlikeIcon
							name="unlike"
							className={classes.unlikeButton}
							color="secondary" 
						/>
					)}
					</IconButton> 

					</Typography>
					<Typography 
						variant="body2" 
						color={"textSecondary"}
					>
						{moment(createdAt).fromNow()}
					</Typography>


				</CardContent>
			</Card>
		)
	}
}




export default withStyles(styles)(Messages);