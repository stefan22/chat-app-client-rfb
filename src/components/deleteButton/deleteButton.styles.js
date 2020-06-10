import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	dialogTitle: {
		color: theme.palette.primary.dark
	},
	deleteButton: {
		margin: '0 1rem 0 2rem',
		lineHeight: 1.5,
		'& svg': {
			verticalAlign: 'text-top',
			cursor: 'pointer'
		},
	},
	deleteHeading: {
		fontWeight: 500,
		display: 'block',
		fontSize: '1.5rem',
		color: theme.palette.secondary.main
	},
	deleteAction: {
		fontWeight: 500,
	},
	dialogdescription: {
		color: theme.palette.secondary.contrastText
	}




}));