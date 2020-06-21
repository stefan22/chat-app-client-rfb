import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => {
	//console.log(theme);
	return ({
		card: {
			display: 'flex',
			zIndex: 0,
			padding: '1rem',
			marginBottom: 20,
			background: theme.palette.grey[50],
			transition: theme.transitions.easing.easeInOut,
			transitDelay: theme.transitions.duration.enteringScreen ,
			[theme.breakpoints.down('sm')]: {
			  flexDirection: 'column',
			},
		},
		image: {
			width: '100%',
			maxWidth: '310px',
			transform: 'scale(0.825)',
			height: 'auto',
			marginRight: '1rem',
			boxShadow: theme.shadows[1],
			[theme.breakpoints.down('sm')]: {
				maxWidth: '250px',
				margin:'0 auto',
				height: '250px',
				boxShadow: 'none',
			},
		},
		imageAuth: {
			width: '100%',
			maxWidth: '250px',
			transform: 'scale(0.8)',
			height: 'auto',
			marginRight: '1rem',
			[theme.breakpoints.down('sm')]: {
				maxWidth: '250px',
				margin:'0 auto',
				height: '250px',
				boxShadow: 'none',
			},
		},
		content: {
			padding: '24px',
			display: 'flex',
			flexDirection: 'column',
			height: 'auto',
			justifyContent: 'space-between',
			width: '100%',
		},
		heading: {
			textTransform: 'capitalize',
			[theme.breakpoints.down('sm')]: {
			 	textAlign: 'center',
			},
		},
		likeButtonWrapper: {
			padding: 0,
			marginTop: '.85rem',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
			width: '22px',
			justifyContent: 'flex-start',
			[theme.breakpoints.down('sm')]: {
			 	textAlign: 'center',
				width: '100%',
				justifyContent: 'center',
			},
		},
		likeButton: {
			width: '22px',
		},
		unlikeButton: {
			width: '22px'
		},
		messageInnerWrapper: {
			color: theme.palette.secondary.contrastText,
			fontSize: '.94rem',
			lineHeight: 1.5,
			display: 'flex',
			flexDirection: 'column',
			verticalAlign: 'baseline',
			padding: '1rem 0',
			justifyContent: 'flex-start',
			minHeight: '185px',
			[theme.breakpoints.down('sm')]: {
			 	textAlign: 'center',
			},
		}

	});
  
});



