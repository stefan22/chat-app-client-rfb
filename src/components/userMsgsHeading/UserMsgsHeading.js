import React from 'react';
// mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// styles
import userMsgsHeading from './userMsgsHeading.styles';

const UserMsgsHeading = ({pageTitle}) => {
	const classes = userMsgsHeading();
	return (
		<>
		 <Typography 
			className={classes.userTitle}
			variant='h2' color='primary' align='center'>



			{pageTitle}



		</Typography>
		</>
	);


}


export default UserMsgsHeading;