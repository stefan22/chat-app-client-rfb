import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	deleteButton: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: '4px',
		padding: '5px 15px 3px 15px',
		lineHeight: 0,
		
		'& svg': {
			color: theme.palette.primary.contrastText,
			cursor: 'pointer',
		}
	},
	dialogTitle: {
		color: theme.palette.primary.dark
	},
	postAction: {
		fontWeight: 500
	},
	cancelAction: {
		fontWeight: 500
	}




}));