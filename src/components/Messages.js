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


class Messages extends Component {
	render() {
		const { 
			classes, 
			imageUrl,messageId,message,createdAt,user 
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
					<Typography variant="body1">{message}</Typography>
					<Typography variant="body2" color={"secondary"}>{moment(createdAt).fromNow()}</Typography>
				</CardContent>
			</Card>
		)
	}
}

export default withStyles(styles)(Messages);