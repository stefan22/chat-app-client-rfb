import theme from '../../theme/customTheme';

export default {
	card: {
		display: 'flex',
		zIndex: 0,
		padding: '1rem',
		marginBottom: 20,
	},
	image: {
		width: '100%',
		maxWidth: '250px',
		backgroundSize: 'cover',
		height: 'auto',
		marginRight: '1.15rem',
		
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
		textTransform: 'capitalize'
	},
	likeButtonWrapper: {
		padding: 0,
		marginTop: '.85rem',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '22px',
		justifyContent: 'flex-start',
	},
	likeButton: {
		width: '22px',
	},
	unlikeButton: {
		width: '22px',
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
	}
}