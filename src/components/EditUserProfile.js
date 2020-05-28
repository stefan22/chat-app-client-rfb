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
// styles
import styles from '../theme/editUserProfile';


class EditUserProfile extends Component {
	state = {
		bio: '',
		location: '',
		website: '',
		open: false,
	}

	componentDidMount() {
		const {bio,location,website} = this.props;
		this.setState({
			bio: bio ? bio : 'enter something about you',
			location: location ? location : 'enter your location',
			website: website ? website : 'enter website or blog here'
		})
	}

	handleOpen = () => {
		this.setState({
			open: true,
		});
	}

	handleProfileChange = (event) => {
		const {name,value,type} = event.target;
		if (type === 'text' || type === 'textarea') {
			this.setState({
				[name]:value
			})
		}
	}

	handleCancel = () => {
		this.setState({
			open: false
		})
	}

	handleSubmit = () => {
		const {bio,location,website} = this.state;
		const userProfile = {
			bio,
			location,
			website,
		}
		this.setState({open: false});
		console.log(userProfile);
	}

	render() {
		//console.log(this);
		const { open } = this.state;
		const { classes } = this.props;
		return (
			<div>
				<div className={classes.userProfileIconWrap}>
					<LaunchIcon
						className={classes.editProfileIcon}
						onClick={this.handleOpen}
						color="primary" 
					/> 
						<Typography
                variant='body1'
                component="span"
                color="textSecondary"
						 >Edit user profile
						</Typography>
				</div>
				<Dialog open={open} onClose={this.handleClose}>
					<DialogTitle 
						className={classes.editProfile}
						id="editProfile"
						color="primary"
					>
						User Profile
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							You can make changes to your user profile here.
						</DialogContentText>
						<TextField
							autoFocus
							margin="dense"
							id="userStatement"
							name="bio"
							label="Edit user statement"
							type="textarea"
							onChange={this.handleProfileChange}
							fullWidth
						/>
							<TextField
							autoFocus
							margin="dense"
							name="location"
							id="userLocation"
							label="Edit user location"
							type="text"
							fullWidth
							onChange={this.handleProfileChange}
						/>
							<TextField
							autoFocus
							margin="dense"
							name="website"
							id="userWebsite"
							label="Edit user website or blog"
							type="type"
							fullWidth
							onChange={this.handleProfileChange}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleCancel} color="primary">
							Cancel
						</Button>
						<Button onClick={this.handleSubmit} color="primary">
							Save
						</Button>
					</DialogActions>
      </Dialog>
			</div>
		)
	}
}


export default withStyles(styles)(EditUserProfile);