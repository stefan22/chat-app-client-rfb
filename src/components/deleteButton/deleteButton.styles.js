import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	dialogTitle: {
		color: theme.palette.primary.dark,
		marginTop: '1rem',
		padding: '1rem',
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
	dialogDescription: {
		color: theme.palette.secondary.contrastText,
		padding: '1rem',
	},
	deleteInfo: {
		fontSize: '1rem',
		color: 'color: rgba(0, 0, 0, 0.54)',
	},
	dialogActions: {
		padding: '1rem',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	}


}));