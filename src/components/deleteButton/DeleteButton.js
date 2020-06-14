import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import deleteButton from './deleteButton.styles';
// redux
import { connect } from 'react-redux';
import { getDeleteMessage } from '../../redux/actions/messagesActions';
import { setDeleteWarning } from '../../redux/actions/uiActions';


const DeleteButton = ({
  messageId,
  user,
  userMessage,  
  authenticated,
  deleteMessageWarning,
  setDeleteWarning,
  getDeleteMessage,
  handleDeleteWarning
 

}) => {
	const classes = deleteButton();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    let isUser = user.protected.user;
    if (userMessage === isUser) {
      return setOpen(true);
    }
     // otherwise
    handleDeleteWarning();
  };

  const handleClose = (evt) => {
    let value = evt.target.parentElement.name;
    // pressed delete
    if (value.toLowerCase() === 'delete') getDeleteMessage(messageId,user,userMessage);
    setOpen(false); 
  };


  return (
      <div className={classes.deleteButton}>
      
        <DeleteForeverIcon 
          onClick={handleClickOpen}
          color="secondary"
        />
      

        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogTitle 
            className={classes.dialogTitle}
            id="alert-dialog-title">
            {
              "Are you sure you want to delete this message?"
            }
          </DialogTitle>
          <DialogContent className={classes.dialogdescription}>
            <DialogContentText id="alert-dialog-description">
              <span className={classes.deleteHeading}>All delete actions are final!</span> 
              Press <span className={classes.deleteAction}>Delete</span> to proceed with deletion or  <span className={classes.deleteAction}> Cancel</span>, 
              if you've changed your mind.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(evt) => handleClose(evt)} name="cancel" color="secondary">
              Cancel
            </Button>
            <Button 
              onClick={(evt) => handleClose(evt)} 
              name="delete" 
              color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  );
}


const mapStateToProps = state => ({
  user: state.user,
  authenticated: state.user.authenticated,
  deleteMessageWarning: state.ui.deleteMessageWarning
})


const mapActionsToProps = {
  getDeleteMessage,
  setDeleteWarning,

}

export default connect(mapStateToProps,mapActionsToProps)(DeleteButton);