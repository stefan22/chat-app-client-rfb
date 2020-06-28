import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FabButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" variant="extended">
        <LockOpenIcon className={classes.extendedIcon} />
        <Link style={{color: 'white',fontWeight: 500}} to={"/login"}>Login here</Link>
      </Fab>
    </div>
  );
}